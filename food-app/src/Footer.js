import React from 'react';
import { Box, Typography, Container, Grid, Link as MuiLink } from '@mui/material';

export const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#111827', color: 'gray', py: 6, mt: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>Gourmet Bites</Typography>
            <Typography variant="body2">Delivering fresh, chef-curated meals straight to your door with unmatched speed and quality.</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>Quick Links</Typography>
            <MuiLink href="/" color="inherit" underline="hover" display="block">Home</MuiLink>
            <MuiLink href="/menu" color="inherit" underline="hover" display="block">Full Menu</MuiLink>
            <MuiLink href="/about" color="inherit" underline="hover" display="block">About Us</MuiLink>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>Contact Us</Typography>
            <Typography variant="body2">Support: support@gourmetbites.com</Typography>
            <Typography variant="body2">Phone: +1 (800) 555-FOOD</Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ mt: 4, pt: 2, borderTop: '1px solid #374151' }}>
          &copy; 2026 Gourmet Bites Inc. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};