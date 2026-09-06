import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FoodCard } from './FoodCard';
import { FOOD_ITEMS } from './FoodData';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box sx={{ bgcolor: '#1f2937', color: 'white', py: 10, textAlign: 'center', px: 2 }}>
        <Container maxWidth="md">
          <Typography variant="h2" fontWeight="bold" gutterBottom>Delicious Food, Delivered Fast.</Typography>
          <Typography variant="h6" color="gray" paragraph>
            Satisfy your cravings with gourmet dishes prepared by master chefs using local fresh ingredients.
          </Typography>
          <Button variant="contained" color="warning" size="large" sx={{ mt: 2 }} onClick={() => navigate('/menu')}>
            Explore Full Menu
          </Button>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ my: 6 }}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom sx={{ mb: 4 }}>
          Featured Dishes
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {FOOD_ITEMS.slice(0, 3).map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <FoodCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};