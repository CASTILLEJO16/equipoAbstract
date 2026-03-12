import React from 'react';
import {
  Paper,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  ExpandMore,
  Lightbulb,
  CheckCircle,
  Code,
  AddCircle,
  Settings
} from '@mui/icons-material';

const PatternInfo = () => {
  return (
    <Paper sx={{ p: 3, mt: 4, backgroundColor: 'grey.50' }}>
      <Typography variant="h6" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Lightbulb />
        Beneficio del Patrón Abstract Factory
      </Typography>
      
      

      <Box sx={{ mt: 3 }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Code /> ¿Cómo evita usar mucho NEW?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List dense>
              <ListItem>
                <ListItemIcon><CheckCircle color="error" /></ListItemIcon>
                <ListItemText 
                  primary="Sin patrón (acoplamiento fuerte)" 
                  secondary="const plato = new Ramen(); const bebida = new Sake();"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                <ListItemText 
                  primary="Con Abstract Factory (desacoplamiento)" 
                  secondary="const menu = fabrica.crearMenu(); // La fábrica decide qué crear"
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <AddCircle /> ¿Cómo agregar una nueva cocina?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List dense>
              <ListItem>
                <ListItemIcon><AddCircle color="primary" /></ListItemIcon>
                <ListItemText primary="1. Crear nuevos productos concretos" />
              </ListItem>
              <ListItem>
                <ListItemIcon><AddCircle color="primary" /></ListItemIcon>
                <ListItemText primary="2. Implementar una nueva fábrica" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckCircle color="success" /></ListItemIcon>
                <ListItemText primary="¡El código del cliente no cambia!" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Settings /> Componentes del Patrón
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List dense>
              <ListItem>
                <ListItemText 
                  primary="🏭 Productos Abstractos" 
                  secondary="PlatoFuerte, Bebida, Postre - Definen interfaces"
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="🍽️ Productos Concretos" 
                  secondary="ChowMein, Ramen, Tacos - Implementaciones específicas"
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="🏪 Fábrica Abstracta" 
                  secondary="FabricaRestaurante - Define métodos de creación"
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="🍴 Fábricas Concretas" 
                  secondary="FabricaChino, FabricaJapones - Crean productos específicos"
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Paper>
  );
};

export default PatternInfo;
