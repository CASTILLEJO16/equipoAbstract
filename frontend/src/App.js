import React from 'react';
import {
  Container,
  Grid,
  Paper,
  Box,
  CircularProgress,
  Alert,
  Snackbar,
  Fade,
  Typography
} from '@mui/material';
import {
  LocalDining,
  LocalBar,
  Cake
} from '@mui/icons-material';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import MenuCard from './components/MenuCard';
import PatternInfo from './components/PatternInfo';
import { useRestaurantFactory } from './hooks/useRestaurantFactory';

const restaurantes = [
  {
    id: 'chino',
    nombre: 'Restaurante Chino',
    icono: 'CH',
    color: '#E53935',
    descripcion: 'Auténtica cocina china tradicional',
    gradient: 'linear-gradient(135deg, #E53935 0%, #C62828 100%)'
  },
  {
    id: 'japones',
    nombre: 'Restaurante Japonés',
    icono: 'JP',
    color: '#43A047',
    descripcion: 'Exquisita cocina japonesa',
    gradient: 'linear-gradient(135deg, #43A047 0%, #2E7D32 100%)'
  },
  {
    id: 'mexicano',
    nombre: 'Restaurante Mexicano',
    icono: 'MX',
    color: '#FB8C00',
    descripcion: 'Sabrosa comida mexicana',
    gradient: 'linear-gradient(135deg, #FB8C00 0%, #EF6C00 100%)'
  },
  {
    id: 'italiano',
    nombre: 'Restaurante Italiano',
    icono: 'IT',
    color: '#D32F2F',
    descripcion: 'Clásica cocina italiana',
    gradient: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)'
  },
  {
    id: 'indio',
    nombre: 'Restaurante Indio',
    icono: 'IN',
    color: '#7B1FA2',
    descripcion: 'Aromática cocina india',
    gradient: 'linear-gradient(135deg, #7B1FA2 0%, #4A148C 100%)'
  }
];

function App() {
  const { selectedRestaurant, menu, loading, error, selectRestaurant, reset } = useRestaurantFactory();

  const handleCloseError = () => {
    // Error se cierra automáticamente o al cambiar de restaurante
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Header />
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
          <Paper sx={{ p: 4, textAlign: 'center' }}>
            <CircularProgress size={60} thickness={4} />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Creando tu menú personalizado...
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Preparando los mejores platillos para ti
            </Typography>
          </Paper>
        </Box>
      </Container>
    );
  }

  return (
    <>
      <Header />
      
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {!menu ? (
          /* Selección de Restaurante */
          <Fade in={!menu} timeout={500}>
            <Box>
              <Box textAlign="center" mb={4}>
                <Typography variant="h5" gutterBottom>
                  � Selecciona un Restaurante
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Elige el tipo de cocina que prefieres y nosotros crearemos un menú perfecto para ti
                </Typography>
              </Box>
              
              <Grid container spacing={3}>
                {restaurantes.map((restaurante, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={12/5} key={restaurante.id}>
                    <RestaurantCard
                      restaurante={restaurante}
                      onSelect={selectRestaurant}
                      selected={selectedRestaurant?.id === restaurante.id}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Fade>
        ) : (
          /* Mostrar Menú */
          <Fade in={!!menu} timeout={500}>
            <Box>
              {/* Header del Menú */}
              <Paper sx={{ p: 3, mb: 4, backgroundColor: 'primary.main', color: 'white' }}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Box>
                    <Typography variant="h4" gutterBottom>
                      {selectedRestaurant.icono} {selectedRestaurant.nombre}
                    </Typography>
                    <Typography variant="subtitle1">
                      Menú Completo del Día - Preparado con ❤️
                    </Typography>
                  </Box>
                  <Box
                    component="button"
                    onClick={reset}
                    sx={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      border: '1px solid white',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.3)'
                      }
                    }}
                  >
                    Cambiar Restaurante
                  </Box>
                </Box>
              </Paper>

              {/* Menú Detallado */}
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <MenuCard
                    titulo="Plato Fuerte"
                    icono={<LocalDining />}
                    item={menu.getInfo().plato}
                    color="#E53935"
                    delay={0.1}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <MenuCard
                    titulo="Bebida"
                    icono={<LocalBar />}
                    item={menu.getInfo().bebida}
                    color="#1E88E5"
                    delay={0.2}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <MenuCard
                    titulo="Postre"
                    icono={<Cake />}
                    item={menu.getInfo().postre}
                    color="#8E24AA"
                    delay={0.3}
                  />
                </Grid>
              </Grid>

              {/* Información del Patrón */}
              <PatternInfo />
            </Box>
          </Fade>
        )}

        {/* Snackbar para errores */}
        <Snackbar
          open={!!error}
          autoHideDuration={6000}
          onClose={handleCloseError}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert severity="error" onClose={handleCloseError}>
            {error}
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
}

export default App;
