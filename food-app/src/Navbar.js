import React from 'react';
import { AppBar, Toolbar, Typography, Button, Badge, IconButton, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export const Navbar = () => {
  const totalItems = useSelector((state) => state.counter.totalItems);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#111827' }}>
      <Toolbar>
        <RestaurantMenuIcon sx={{ mr: 1, color: '#f59e0b' }} />
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
          Gourmet Bites
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/menu">Menu</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>

          {isAuthenticated ? (
            <>
              <Typography variant="body2" sx={{ color: '#f59e0b', mx: 1 }}>Hi, {user.name}</Typography>
              <Button color="inherit" component={Link} to="/checkout">Checkout</Button>
              <Button variant="outlined" color="error" onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</Button>
            </>
          ) : (
            <Button variant="contained" color="warning" component={Link} to="/login">Login</Button>
          )}

          <IconButton color="inherit" onClick={() => navigate('/cart')}>
            <Badge badgeContent={totalItems} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};