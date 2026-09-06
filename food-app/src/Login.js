import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginError = useSelector((state) => state.auth.loginError);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password.length >= 4) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: { email, name: email.split('@')[0] } });
      navigate('/');
    } else {
      dispatch({ type: 'LOGIN_FAILURE', payload: 'Invalid credentials. Password must be at least 4 characters.' });
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8, px: 2 }}>
      <Paper sx={{ padding: 4, maxWidth: 400, width: '100%', borderRadius: 3 }}>
        <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>Account Login</Typography>
        {loginError && <Typography color="error" variant="body2" align="center" sx={{ mb: 2 }}>{loginError}</Typography>}
        
        <form onSubmit={handleLogin}>
          <TextField fullWidth label="Email Address" type="email" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <TextField fullWidth label="Password" type="password" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <Button fullWidth variant="contained" color="warning" size="large" type="submit" sx={{ mt: 3 }}>
            Sign In
          </Button>
        </form>
      </Paper>
    </Box>
  );
};