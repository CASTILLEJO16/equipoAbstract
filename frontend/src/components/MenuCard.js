import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Avatar,
  Paper
} from '@mui/material';

const MenuCard = ({ titulo, icono, item, color, delay }) => {
  return (
    <Card
      sx={{ 
        height: '100%', 
        boxShadow: 3, 
        '&:hover': { 
          boxShadow: 8,
          transform: 'translateY(-4px)'
        },
        animation: `fadeIn 0.6s ease-in-out ${delay}s both`,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `linear-gradient(90deg, ${color} 0%, ${color}88 100%)`,
        }
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box display="flex" alignItems="center" mb={3}>
          <Avatar 
            sx={{ 
              bgcolor: color, 
              mr: 2,
              width: 48,
              height: 48,
              boxShadow: `0 4px 8px ${color}33`
            }}
          >
            {icono}
          </Avatar>
          <Typography 
            variant="h6" 
            component="h3"
            sx={{ 
              fontWeight: 700,
              color: color
            }}
          >
            {titulo}
          </Typography>
        </Box>
        
        <Paper 
          sx={{ 
            p: 2, 
            mb: 2, 
            backgroundColor: `${color}08`,
            border: `1px solid ${color}20`
          }}
        >
          <Typography 
            variant="subtitle1" 
            sx={{ 
              fontWeight: 'bold',
              color: color,
              mb: 1
            }}
          >
            {item.nombre}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ 
              lineHeight: 1.4,
              fontStyle: 'italic'
            }}
          >
            {item.descripcion}
          </Typography>
        </Paper>
        
        <Box display="flex" justifyContent="center">
          <Chip
            label={item.servicio}
            size="medium"
            variant="outlined"
            sx={{ 
              mt: 1,
              fontWeight: 500,
              borderColor: color,
              color: color,
              backgroundColor: `${color}08`,
              '&:hover': {
                backgroundColor: `${color}15`
              }
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default MenuCard;
