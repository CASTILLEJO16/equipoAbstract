import React from 'react';
import { Card, CardContent, Typography, Box, Chip, IconButton, Grid } from '@mui/material';
import { AccessTime, Restaurant, Whatshot, BookmarkBorder, Share } from '@mui/icons-material';

const MenuCard = ({ item, tipo, theme, isFeatured = false }) => {
  const hasMoreWeight = isFeatured || tipo === 'platoFuerte';
  const cardHeight = hasMoreWeight ? 520 : 480;
  const imageHeight = hasMoreWeight ? 280 : 220;
  
  const getStyles = () => theme ? {
    bg: theme.colors.background,
    border: `1px solid ${theme.colors.border.primary}`,
    radius: theme.borderRadius.card,
    shadow: theme.shadows.card,
    primary: theme.colors.primary,
    textSec: theme.colors.text.secondary,
    surface: theme.colors.surface,
    chipRadius: theme.borderRadius.chip
  } : {
    bg: '#fff',
    border: '1px solid #e5e7eb',
    radius: '12px',
    shadow: '0 4px 24px rgba(0,0,0,0.08)',
    primary: '#666',
    textSec: '#4b5563',
    surface: '#fff',
    chipRadius: '20px'
  };

  const s = getStyles();

  return (
    <Card sx={{
      height: cardHeight,
      display: 'flex',
      flexDirection: 'column',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      overflow: 'hidden',
      background: s.bg,
      border: s.border,
      borderRadius: s.radius,
      boxShadow: s.shadow,
      '&:hover': { 
        boxShadow: theme?.shadows.cardHover || '0 12px 40px rgba(0,0,0,0.15)',
        transform: 'translateY(-8px)',
      }
    }}>
      {/* Imagen 60% */}
      <Box sx={{ position: 'relative', height: imageHeight }}>
        <img
          src={item.i}
          alt={item.n}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s',
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        />
        
        {/* Overlay */}
        <Box sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
          p: 2
        }}>
          <Typography sx={{
            fontWeight: 800,
            color: 'white',
            fontSize: hasMoreWeight ? '1.8rem' : '1.5rem',
            textShadow: '0 2px 8px rgba(0,0,0,0.7)',
            fontFamily: theme?.typography.fontFamily || '"Playfair Display", serif',
            mb: 1
          }}>
            {item.n}
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
            {item.c?.slice(0, 3).map((car, i) => (
              <Chip
                key={i}
                label={car}
                size="small"
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  height: '20px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.3)'
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Botones flotantes */}
        <Box sx={{ position: 'absolute', top: 16, right: 16, display: 'flex', gap: 0.5 }}>
          <IconButton size="small" sx={{
            backgroundColor: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(10px)',
            width: 32,
            height: 32,
            '&:hover': { backgroundColor: 'rgba(255,255,255,1)', transform: 'scale(1.1)' }
          }}>
            <BookmarkBorder sx={{ fontSize: '1rem', color: s.primary }} />
          </IconButton>
          <IconButton size="small" sx={{
            backgroundColor: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(10px)',
            width: 32,
            height: 32,
            '&:hover': { backgroundColor: 'rgba(255,255,255,1)', transform: 'scale(1.1)' }
          }}>
            <Share sx={{ fontSize: '1rem', color: s.primary }} />
          </IconButton>
        </Box>

        {/* Picante */}
        {item.p && (
          <Box sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            backgroundColor: 'rgba(220,38,38,0.9)',
            backdropFilter: 'blur(10px)',
            px: 1.5,
            py: 0.5,
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: 0.5
          }}>
            <Whatshot sx={{ fontSize: '0.8rem', color: 'white' }} />
            <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, color: 'white' }}>
              PICANTE
            </Typography>
          </Box>
        )}
      </Box>
      
      {/* Contenido */}
      <CardContent sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{
          lineHeight: 1.6,
          fontWeight: 500,
          fontSize: hasMoreWeight ? '1.1rem' : '1rem',
          color: s.textSec,
          mb: 2,
          fontFamily: theme?.typography.fontFamily || '"Inter", sans-serif'
        }}>
          {item.d}
        </Typography>
        
        {/* Info */}
        <Box sx={{
          p: 1.5,
          mb: 2,
          backgroundColor: s.surface,
          border: `1px solid ${theme?.colors.border.accent || '#e5e7eb'}`,
          borderRadius: s.chipRadius,
          backdropFilter: 'blur(10px)'
        }}>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={6}>
              <Box display="flex" alignItems="center" gap={0.5}>
                <AccessTime sx={{ color: s.primary, fontSize: '1rem' }} />
                <Typography sx={{ fontWeight: 600, color: s.textSec, fontSize: '0.85rem' }}>
                  {item.t}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box display="flex" alignItems="center" gap={0.5}>
                <Restaurant sx={{ color: s.primary, fontSize: '1rem' }} />
                <Typography sx={{ fontWeight: 600, color: s.textSec, fontSize: '0.85rem' }}>
                  {tipo === 'platoFuerte' ? 'Principal' : tipo === 'bebida' ? 'Bebida' : 'Postre'}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        
        {/* Chips */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 'auto' }}>
          <Chip
            label="PREMIUM"
            size="small"
            sx={{
              fontWeight: 700,
              fontSize: '0.75rem',
              padding: '4px 12px',
              borderRadius: s.chipRadius,
              backgroundColor: s.primary,
              color: 'white',
              border: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          />
          {isFeatured && (
            <Chip
              label="DESTACADO"
              size="small"
              sx={{
                fontWeight: 700,
                fontSize: '0.75rem',
                padding: '4px 12px',
                borderRadius: s.chipRadius,
                background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
                color: 'white',
                border: 'none',
                boxShadow: '0 2px 8px rgba(245,158,11,0.3)'
              }}
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default MenuCard;
