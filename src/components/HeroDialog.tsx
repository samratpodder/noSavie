import { Box, Typography } from '@mui/material';
import React from 'react';

export default function HeroDialog() {
  return (
    <Box>
      <Typography sx={{ fontSize: '3rem' }} variant="h1" gutterBottom>Send texts without saving unknown numbers</Typography>
      <Typography variant="h4" gutterBottom>Say it. Don&apos;t save it.</Typography>
    </Box>
  );
}
