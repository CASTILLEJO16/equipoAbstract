import React from 'react';
import {
  Typography,
  Box,
  Chip,
  Container,
  Paper,
  Avatar
} from '@mui/material';
import { 
  Restaurant, 
  Code, 
  Star, 
  AutoAwesome 
} from '@mui/icons-material';

const Header = () => {
  return (
    <Container maxWidth="lg">
      <Box textAlign="center" mb={6}>
        <Paper 
          sx={{ 
            p: 4, 
            mb: 4,
            background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(66, 165, 245, 0.1) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(25, 118, 210, 0.2)',
            borderRadius: 4
          }}
        >
          <Avatar 
            sx={{ 
              width: 80, 
              height: 80, 
              mx: 'auto', 
              mb: 2,
              background: 'linear-gradient(135deg, #1976d2 30%, #42a5f5 90%)',
              fontSize: '2rem',
              boxShadow: '0 8px 16px rgba(25, 118, 210, 0.3)'
            }}
          >
            RS
          </Avatar>
          
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom 
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(135deg, #1976d2 30%, #42a5f5 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Sistema de Restaurantes
          </Typography>
          
          <Typography 
            variant="h6" 
            color="text.secondary" 
            paragraph
            sx={{ 
              mb: 3,
              fontWeight: 400,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
             Elige tu restaurante favorito y descubre menús excepcionales
          </Typography>
          
          <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap" mb={3}>
            <Chip
              label="Design Pattern: Abstract Factory"
              color="primary"
              variant="outlined"
              size="medium"
              icon={<Restaurant />}
              sx={{ 
                fontWeight: 600,
                '& .MuiChip-icon': {
                  color: '#1976d2'
                }
              }}
            />
            <Chip
              label="React + Material-UI"
              color="secondary"
              variant="outlined"
              size="medium"
              icon={<Code />}
              sx={{ 
                fontWeight: 600,
                '& .MuiChip-icon': {
                  color: '#dc004e'
                }
              }}
            />
            <Chip
              label="JavaScript ES6+"
              color="success"
              variant="outlined"
              size="medium"
              icon={<AutoAwesome />}
              sx={{ 
                fontWeight: 600,
                '& .MuiChip-icon': {
                  color: '#2e7d32'
                }
              }}
            />
          </Box>
          
          <Box display="flex" justifyContent="center" gap={1}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} sx={{ color: '#ffc107', fontSize: '1.2rem' }} />
            ))}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Header;
