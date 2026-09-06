import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
export const About = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>About Gourmet Bites</Typography>
        <Typography variant="body1" paragraph>
          Founded in 2026, Gourmet Bites was created with a single mission: to bring high-quality, chef-curated meals directly to your doorstep without compromising on speed or flavor.
        </Typography>
        <Typography variant="body1" paragraph>
          We partner with top local farms to ensure every ingredient is organic, sustainable, and fresh. Our expert team of culinary professionals prepares every meal with care and precision.
        </Typography>
      </Paper>
    </Container>
  );
};