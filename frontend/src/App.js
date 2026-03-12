import { Container, Grid, Typography, Box } from '@mui/material';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import MenuCard from './components/MenuCard';
import { useRestaurantFactory } from './hooks/useRestaurantFactory';
import { getRestaurantTheme } from './themes/RestaurantThemes';

const RESTAURANTS = [
  {
    id: "chino",
    nombre: "Cocina China Imperial",
    descripcion: "TradiciÃ³n milenaria con sabores autÃ©nticos y tÃ©cnicas ancestrales",
    imagen: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=992&auto=format&fit=crop"
  },
  {
    id: "japones",
    nombre: "Sabor JaponÃ©s",
    descripcion: "ArmonÃ­a perfecta entre frescura y tradiciÃ³n en cada plato",
    imagen: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=880&auto=format&fit=crop"
  },
  {
    id: "mexicano",
    nombre: "Sabores de MÃ©xico",
    descripcion: "Especias vibrantes y tradiciones culinarias que celebran la vida",
    imagen: "https://images.unsplash.com/photo-1707603571504-86c1ea50903e?q=80&w=687&auto=format&fit=crop"
  },
  {
    id: "italiano",
    nombre: "Ristorante Italiano",
    descripcion: "PasiÃ³n y tradiciÃ³n en cada pasta, como en la abuela de Nonna",
    imagen: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1469&auto=format&fit=crop"
  },
  {
    id: "indio",
    nombre: "Aromas de la India",
    descripcion: "Especias exÃ³ticas y sabores intensos que transportan a otro mundo",
    imagen: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?q=80&w=880&auto=format&fit=crop"
  }
];

const RESTAURANTS_WITH_THEME = RESTAURANTS.map((restaurante) => ({
  ...restaurante,
  theme: getRestaurantTheme(restaurante.id),
}));

function App() {
  const { selectedRestaurant, menu, restaurantTheme, selectRestaurant, reset } = useRestaurantFactory();

  const handleRestaurantSelect = (restaurante) => {
    selectRestaurant(restaurante);
  };

  const handleBack = () => {
    reset();
  };

  return (
    <Box sx={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #FDF5E6 0%, #FFF8DC 50%, #FDF5E6 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `radial-gradient(circle at 20% 20%, #dc2626 0%, transparent 50%), radial-gradient(circle at 80% 80%, #ea580c 0%, transparent 50%)`,
          pointerEvents: 'none',
        }
      }}>
        <Header 
          selectedRestaurant={selectedRestaurant}
          onBack={handleBack}
        />
        
        <Container maxWidth="xl" sx={{ py: 4, position: 'relative', zIndex: 1 }}>
          {!selectedRestaurant ? (
            <>
              <Typography 
                variant="h3" 
                component="h1" 
                sx={{ 
                  textAlign: 'center', 
                  mb: 2,
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  color: '#2C1810',
                  fontFamily: '"Playfair Display", serif',
                  letterSpacing: '0.02em',
                }}
              >
                Sabores del Mundo
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  textAlign: 'center', 
                  mb: 6,
                  color: '#5D4037',
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  fontWeight: 500,
                  maxWidth: '600px',
                  mx: 'auto',
                }}
              >
                Descubre cocinas internacionales con ingredientes autÃ©nticos y preparaciones artesanales
              </Typography>
              
              <Grid container spacing={4}>
                {RESTAURANTS_WITH_THEME.map((restaurante) => (
                  <Grid item xs={12} sm={6} md={4} key={restaurante.id}>
                    <RestaurantCard
                      restaurante={restaurante}
                      onSelect={handleRestaurantSelect}
                      selected={false}
                    />
                  </Grid>
                ))}
              </Grid>
            </>
          ) : (
            <>
              <Typography 
                variant="h3" 
                component="h2" 
                sx={{ 
                  textAlign: 'center', 
                  mb: 6,
                  fontWeight: 800,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  color: restaurantTheme?.colors.text.primary || '#2C1810',
                  fontFamily: restaurantTheme?.typography.fontFamily || '"Playfair Display", serif',
                }}
              >
                MenÃº {selectedRestaurant.nombre}
              </Typography>
              
              {menu && (
                <Grid container spacing={4}>
                  <Grid item xs={12} md={8}>
                    <MenuCard
                      item={menu.getInfo().plato}
                      tipo="platoFuerte"
                      restauranteId={selectedRestaurant.id}
                      theme={restaurantTheme}
                      isFeatured={true}
                    />
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <MenuCard
                      item={menu.getInfo().bebida}
                      tipo="bebida"
                      restauranteId={selectedRestaurant.id}
                      theme={restaurantTheme}
                      isFeatured={false}
                    />
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <MenuCard
                      item={menu.getInfo().postre}
                      tipo="postre"
                      restauranteId={selectedRestaurant.id}
                      theme={restaurantTheme}
                      isFeatured={false}
                    />
                  </Grid>
                </Grid>
              )}
            </>
          )}
        </Container>
    </Box>
  );
}

export default App;
