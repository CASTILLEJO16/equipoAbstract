import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Grid, Typography, Box } from '@mui/material';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import MenuCard from './components/MenuCardLite';
import { getFabrica } from './RestaurantFactoryLite';

const RESTAURANTS = [
  { id: "chino", nombre: "Cocina China", descripcion: "Tradición milenaria", imagen: "https://i.imgur.com/china.jpg" },
  { id: "japones", nombre: "Sabor Japonés", descripcion: "Armonía perfecta", imagen: "https://i.imgur.com/japon.jpg" },
  { id: "mexicano", nombre: "Sabores de México", descripcion: "Especias vibrantes", imagen: "https://i.imgur.com/mexico.jpg" },
  { id: "italiano", nombre: "Ristorante Italiano", descripcion: "Pasión italiana", imagen: "https://i.imgur.com/italia.jpg" },
  { id: "indio", nombre: "Aromas de la India", descripcion: "Especias exóticas", imagen: "https://i.imgur.com/india.jpg" }
];

const theme = createTheme({
  palette: {
    primary: { main: '#dc2626' },
    secondary: { main: '#ea580c' },
    background: { default: '#FDF5E6', paper: '#ffffff' },
    text: { primary: '#2C1810', secondary: '#5D4037' }
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: { fontFamily: '"Playfair Display", serif', fontWeight: 800 },
    h2: { fontFamily: '"Playfair Display", serif', fontWeight: 700 }
  }
});

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [menu, setMenu] = useState(null);
  const [restaurantTheme, setRestaurantTheme] = useState(null);

  const handleSelect = (restaurante) => {
    const fabricaData = getFabrica(restaurante.id);
    if (fabricaData.fabrica) {
      const nuevoMenu = fabricaData.fabrica.crearMenu();
      setSelectedRestaurant(restaurante);
      setMenu(nuevoMenu);
      setRestaurantTheme(fabricaData.theme);
    }
  };

  const handleBack = () => {
    setSelectedRestaurant(null);
    setMenu(null);
    setRestaurantTheme(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #FDF5E6 0%, #FFF8DC 100%)'
      }}>
        <Header selectedRestaurant={selectedRestaurant} onBack={handleBack} />
        
        <Container maxWidth="xl" sx={{ py: 4 }}>
          {!selectedRestaurant ? (
            <>
              <Typography variant="h3" sx={{ 
                textAlign: 'center', mb: 2, fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                color: '#2C1810', fontFamily: '"Playfair Display", serif'
              }}>
                Sabores del Mundo
              </Typography>
              <Typography variant="h6" sx={{ 
                textAlign: 'center', mb: 6, color: '#5D4037',
                maxWidth: '600px', mx: 'auto'
              }}>
                Descubre cocinas internacionales con ingredientes auténticos
              </Typography>
              
              <Grid container spacing={3}>
                {RESTAURANTS.map((restaurante) => (
                  <Grid item xs={12} sm={6} md={4} key={restaurante.id}>
                    <RestaurantCard
                      restaurante={restaurante}
                      onSelect={handleSelect}
                      selected={false}
                    />
                  </Grid>
                ))}
              </Grid>
            </>
          ) : (
            <>
              <Typography variant="h3" sx={{ 
                textAlign: 'center', mb: 6, fontWeight: 800,
                fontSize: { xs: '2rem', md: '2.5rem' },
                color: restaurantTheme?.colors.text.primary || '#2C1810',
                fontFamily: restaurantTheme?.typography.fontFamily || '"Playfair Display", serif'
              }}>
                Menú {selectedRestaurant.nombre}
              </Typography>
              
              {menu && (
                <Grid container spacing={3}>
                  <Grid item xs={12} md={8}>
                    <MenuCard
                      item={menu.getInfo().plato}
                      tipo="platoFuerte"
                      theme={restaurantTheme}
                      isFeatured={true}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MenuCard
                      item={menu.getInfo().bebida}
                      tipo="bebida"
                      theme={restaurantTheme}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MenuCard
                      item={menu.getInfo().postre}
                      tipo="postre"
                      theme={restaurantTheme}
                    />
                  </Grid>
                </Grid>
              )}
            </>
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
