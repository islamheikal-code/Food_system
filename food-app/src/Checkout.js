import React, { useState } from 'react';
import { Container, Typography, Paper, TextField, Button, Box, Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Checkout = () => {
  const { totalPrice } = useSelector((state) => state.counter);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return (
      <Container maxWidth="sm" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>Please log in to proceed with checkout.</Typography>
        <Button variant="contained" color="warning" onClick={() => navigate('/login')}>Go to Login</Button>
      </Container>
    );
  }

  const handleOrder = (e) => {
    e.preventDefault();
    setSubmitted(true);
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper sx={{ p: 4, borderRadius: 3 }}>
        {submitted ? (
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" color="success.main" fontWeight="bold" gutterBottom>Order Confirmed!</Typography>
            <Typography variant="body1">Thank you for your purchase. Your food is on its way!</Typography>
            <Button variant="contained" color="warning" sx={{ mt: 3 }} onClick={() => navigate('/')}>Return to Home</Button>
          </Box>
        ) : (
          <>
            <Typography variant="h4" fontWeight="bold" gutterBottom>Delivery Details</Typography>
            <Typography variant="h6" color="primary" sx={{ mb: 3 }}>Total Amount: ${totalPrice.toFixed(2)}</Typography>
            
            <form onSubmit={handleOrder}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}><TextField fullWidth label="Full Name" required /></Grid>
                <Grid item xs={12} sm={6}><TextField fullWidth label="Phone Number" required /></Grid>
                <Grid item xs={12}><TextField fullWidth label="Delivery Address" required multiline rows={2} /></Grid>
                <Grid item xs={12} sm={6}><TextField fullWidth label="Card Number" required /></Grid>
                <Grid item xs={6} sm={3}><TextField fullWidth label="Expiry Date" required /></Grid>
                <Grid item xs={6} sm={3}><TextField fullWidth label="CVV" required /></Grid>
              </Grid>
              <Button type="submit" variant="contained" color="warning" size="large" fullWidth sx={{ mt: 4 }}>
                Place Order
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};