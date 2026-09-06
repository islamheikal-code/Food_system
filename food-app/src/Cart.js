import React from 'react';
import { Container, Typography, Box, Paper, Button, List, ListItem, ListItemText, IconButton, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>Your Shopping Cart</Typography>

      {cartItems.length === 0 ? (
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary">Your cart is empty.</Typography>
          <Button variant="contained" color="warning" sx={{ mt: 2 }} onClick={() => navigate('/menu')}>
            Browse Menu
          </Button>
        </Paper>
      ) : (
        <Paper sx={{ p: 3 }}>
          <List>
            {cartItems.map((item) => (
              <React.Fragment key={item.id}>
                <ListItem secondAction={
                  <IconButton edge="end" color="error" onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}>
                    <DeleteIcon />
                  </IconButton>
                }>
                  <ListItemText
                    primary={item.title}
                    secondary={`Quantity: ${item.quantity} | Price: $${(item.price * item.quantity).toFixed(2)}`}
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3, pt: 2 }}>
            <Typography variant="h5" fontWeight="bold">Total: ${totalPrice.toFixed(2)}</Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button color="error" variant="outlined" onClick={() => dispatch({ type: 'CLEAR_CART' })}>Clear</Button>
              <Button variant="contained" color="warning" onClick={() => navigate('/checkout')}>Proceed to Checkout</Button>
            </Box>
          </Box>
        </Paper>
      )}
    </Container>
  );
};