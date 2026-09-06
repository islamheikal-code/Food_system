import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box, Chip } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch } from 'react-redux';

export const FoodCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Card sx={{ maxWidth: 320, borderRadius: 3, boxShadow: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Box>
        <CardMedia component="img" height="180" image={item.image} alt={item.title} />
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Chip label={item.category} size="small" color="primary" variant="outlined" />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <StarIcon sx={{ color: '#f59e0b', fontSize: 18, mr: 0.5 }} />
              <Typography variant="body2" fontWeight="bold">{item.rating}</Typography>
            </Box>
          </Box>
          <Typography variant="h6" fontWeight="bold">{item.title}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{item.description}</Typography>
        </CardContent>
      </Box>

      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <Typography variant="h6" color="primary" fontWeight="bold">${item.price.toFixed(2)}</Typography>
        <Button size="medium" variant="contained" color="warning" onClick={() => dispatch({ type: 'ADD_TO_CART', payload: item })}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};