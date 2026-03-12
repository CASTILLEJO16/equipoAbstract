import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Box
} from '@mui/material';
import {
  Restaurant
} from '@mui/icons-material';

const RestaurantCard = ({ restaurante, onSelect, selected }) => {
  return (
    <Card
      sx={{
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: selected ? 'scale(1.05) translateY(-8px)' : 'scale(1) translateY(0)',
        border: selected ? `3px solid ${restaurante.color}` : 'none',
        background: selected ? restaurante.gradient : 'white',
        color: selected ? 'white' : 'inherit',
        boxShadow: selected ? 8 : 2,
        '&:hover': {
          transform: selected ? 'scale(1.05) translateY(-8px)' : 'translateY(-8px)',
          boxShadow: 8,
          background: restaurante.gradient,
          color: 'white',
          '& .MuiChip-root': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            borderColor: 'rgba(255, 255, 255, 0.3)'
          },
          '& .MuiButton-root': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            borderColor: 'rgba(255, 255, 255, 0.3)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.3)'
            }
          }
        }
      }}
      onClick={() => onSelect(restaurante)}
    >
      <CardContent sx={{ textAlign: 'center', py: 4 }}>
        <Typography 
          variant="h2" 
          gutterBottom 
          sx={{ 
            fontSize: '3rem',
            filter: selected ? 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' : 'none'
          }}
        >
          {restaurante.icono}
        </Typography>
        <Typography 
          variant="h6" 
          gutterBottom 
          sx={{ 
            fontWeight: 700,
            textShadow: selected ? '0 2px 4px rgba(0,0,0,0.3)' : 'none'
          }}
        >
          {restaurante.nombre}
        </Typography>
        <Typography 
          variant="body2" 
          paragraph
          sx={{ 
            opacity: selected ? 0.9 : 0.7,
            fontStyle: selected ? 'italic' : 'normal'
          }}
        >
          {restaurante.descripcion}
        </Typography>
        <Chip
          label={selected ? "✨ Seleccionado" : "Click para seleccionar"}
          size="small"
          variant="outlined"
          sx={{ 
            mb: 2,
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}
        />
        <br />
        <Button
          variant="contained"
          sx={{ 
            mt: 2,
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}
          startIcon={<Restaurant />}
        >
          {selected ? "Ver Menú" : "Seleccionar"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;
