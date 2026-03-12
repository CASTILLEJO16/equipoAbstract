import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Avatar,
  Paper,
  CardMedia,
  IconButton,
  Grid
} from '@mui/material';
import {
  FavoriteBorder,
  Star,
  LocalFireDepartment,
  AccessTime,
  Restaurant,
  Whatshot,
  BookmarkBorder,
  Share
} from '@mui/icons-material';

const MenuCard = ({ item, tipo, restauranteId, theme, isFeatured = false }) => {
  // Determinar si la tarjeta debe tener más peso visual (formato revista)
  const hasMoreWeight = isFeatured || tipo === 'platoFuerte';
  
  // Estilos dinámicos basados en el tema del restaurante
  const getCardStyles = () => {
    if (!theme) {
      // Fallback genérico
      return {
        background: '#FFFFFF',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
        cardHeight: hasMoreWeight ? '520px' : '480px',
        imageHeight: hasMoreWeight ? '280px' : '220px',
        titleSize: hasMoreWeight ? '1.8rem' : '1.5rem',
        descriptionSize: '1.1rem',
      };
    }

    return {
      background: theme.colors.background,
      border: `1px solid ${theme.colors.border.primary}`,
      borderRadius: theme.borderRadius.card,
      boxShadow: theme.shadows.card,
      cardHeight: hasMoreWeight ? '520px' : '480px',
      imageHeight: hasMoreWeight ? '280px' : '220px',
      titleSize: hasMoreWeight ? '1.8rem' : '1.5rem',
      descriptionSize: '1.1rem',
      // Textura de fondo sutil
      backgroundImage: theme.textures.pattern,
      backgroundOpacity: theme.textures.opacity,
    };
  };

  const cardStyles = getCardStyles();

  return (
    <Card
      sx={{
        height: cardStyles.cardHeight,
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
        background: cardStyles.background,
        border: cardStyles.border,
        borderRadius: cardStyles.borderRadius,
        boxShadow: cardStyles.boxShadow,
        '&:hover': { 
          boxShadow: theme?.shadows.cardHover || '0 12px 40px rgba(0, 0, 0, 0.15)',
          transform: 'translateY(-8px)',
        },
        // Aplicar textura de fondo si existe
        ...(cardStyles.backgroundImage && {
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: cardStyles.backgroundOpacity,
            backgroundImage: cardStyles.backgroundImage,
            pointerEvents: 'none',
          }
        })
      }}
    >
      {/* Imagen principal - 60% de la tarjeta */}
      <Box sx={{ position: 'relative', height: cardStyles.imageHeight }}>
        <CardMedia
          component="img"
          height={cardStyles.imageHeight}
          image={item.imagen}
          alt={item.nombre}
          sx={{
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'scale(1.05)',
            }
          }}
        />
        
        {/* Overlay para garantizar legibilidad del texto */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
            p: 3,
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 800,
              color: 'white',
              fontSize: cardStyles.titleSize,
              textShadow: '0 2px 8px rgba(0,0,0,0.7)',
              fontFamily: theme?.typography.fontFamily || '"Playfair Display", serif',
              lineHeight: 1.2,
              mb: 1,
            }}
          >
            {item.nombre}
          </Typography>
          
          {/* Características sensoriales */}
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
            {item.caracteristicas?.slice(0, 3).map((caracteristica, index) => (
              <Chip
                key={index}
                label={caracteristica}
                size="small"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  height: '24px',
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Botones de acción flotantes */}
        <Box sx={{ position: 'absolute', top: 16, right: 16, display: 'flex', gap: 1 }}>
          <IconButton
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              width: 40,
              height: 40,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 1)',
                transform: 'scale(1.1)',
              }
            }}
          >
            <BookmarkBorder sx={{ fontSize: '1.2rem', color: theme?.colors.primary || '#666' }} />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              width: 40,
              height: 40,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 1)',
                transform: 'scale(1.1)',
              }
            }}
          >
            <Share sx={{ fontSize: '1.2rem', color: theme?.colors.primary || '#666' }} />
          </IconButton>
        </Box>

        {/* Indicador de picante */}
        {item.picante && (
          <Box
            sx={{
              position: 'absolute',
              top: 16,
              left: 16,
              backgroundColor: 'rgba(220, 38, 38, 0.9)',
              backdropFilter: 'blur(10px)',
              px: 2,
              py: 1,
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            <Whatshot sx={{ fontSize: '1rem', color: 'white' }} />
            <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, color: 'white' }}>
              PICANTE
            </Typography>
          </Box>
        )}
      </Box>
      
      {/* Contenido */}
      <CardContent sx={{ 
        p: 3, 
        position: 'relative', 
        zIndex: 1,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Descripción sensorial */}
        <Typography 
          variant="body1" 
          sx={{ 
            lineHeight: 1.6,
            fontWeight: 500,
            fontSize: cardStyles.descriptionSize,
            color: theme?.colors.text.secondary || '#4b5563',
            mb: 3,
            fontFamily: theme?.typography.fontFamily || '"Inter", sans-serif',
            flexShrink: 0,
          }}
        >
          {item.descripcion}
        </Typography>
        
        {/* Información adicional */}
        <Paper 
          sx={{ 
            p: 2, 
            mb: 3, 
            backgroundColor: theme?.colors.surface || '#ffffff',
            border: `1px solid ${theme?.colors.border.accent || '#e5e7eb'}`,
            borderRadius: theme?.borderRadius.chip || '8px',
            backdropFilter: 'blur(10px)',
            flexShrink: 0,
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={6}>
              <Box display="flex" alignItems="center" gap={1}>
                <AccessTime sx={{ 
                  color: theme?.colors.primary || '#666', 
                  fontSize: '1.1rem' 
                }} />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontWeight: 600, 
                    color: theme?.colors.text.secondary || '#4b5563',
                    fontSize: '0.9rem',
                  }}
                >
                  {item.tiempo}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box display="flex" alignItems="center" gap={1}>
                <Restaurant sx={{ 
                  color: theme?.colors.primary || '#666', 
                  fontSize: '1.1rem' 
                }} />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontWeight: 600, 
                    color: theme?.colors.text.secondary || '#4b5563',
                    fontSize: '0.9rem',
                  }}
                >
                  {tipo === 'platoFuerte' ? 'Plato Principal' : 
                   tipo === 'bebida' ? 'Bebida' : 'Postre'}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        
        {/* Chips de categorías */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mt: 'auto' }}>
          <Chip
            label="PREMIUM"
            size="medium"
            sx={{ 
              fontWeight: 700,
              fontSize: '0.85rem',
              padding: '6px 16px',
              borderRadius: theme?.borderRadius.chip || '20px',
              backgroundColor: theme?.colors.primary || '#666',
              color: 'white',
              border: 'none',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            }}
          />
          {isFeatured && (
            <Chip
              label="DESTACADO"
              size="medium"
              icon={<Star sx={{ fontSize: '0.9rem !important' }} />}
              sx={{ 
                fontWeight: 700,
                fontSize: '0.85rem',
                padding: '6px 16px',
                borderRadius: theme?.borderRadius.chip || '20px',
                background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
                color: 'white',
                border: 'none',
                boxShadow: '0 2px 8px rgba(245, 158, 11, 0.3)',
              }}
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default MenuCard;
