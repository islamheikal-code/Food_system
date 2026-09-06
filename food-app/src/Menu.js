import React, { useState } from 'react';
import { Container, Typography, Box, Chip, Grid } from '@mui/material';
import { FoodCard } from './FoodCard';
import { FOOD_ITEMS } from './FoodData';

const CATEGORIES = ['All', 'Burgers', 'Pizza', 'Sushi', 'Salads', 'Desserts'];

export const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All'
    ? FOOD_ITEMS
    : FOOD_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" align="center" fontWeight="bold" gutterBottom>Explore Our Menu</Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap', mb: 5 }}>
        {CATEGORIES.map((cat) => (
          <Chip
            key={cat}
            label={cat}
            clickable
            color={selectedCategory === cat ? 'warning' : 'default'}
            onClick={() => setSelectedCategory(cat)}
            sx={{ fontSize: '1rem', px: 1 }}
          />
        ))}
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {filteredItems.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <FoodCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};