import { useState, useCallback } from 'react';
import { getFabrica } from '../RestaurantFactory';

export const useRestaurantFactory = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [menu, setMenu] = useState(null);
  const [restaurantTheme, setRestaurantTheme] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const selectRestaurant = useCallback((restaurante) => {
    setLoading(true);
    setError(null);
    
    try {
      const fabricaData = getFabrica(restaurante.id);
      
      if (fabricaData.fabrica) {
        const nuevoMenu = fabricaData.fabrica.crearMenu();
        setSelectedRestaurant(restaurante);
        setMenu(nuevoMenu);
        setRestaurantTheme(fabricaData.theme);
      } else {
        setError('No se pudo crear la fábrica para este restaurante');
      }
    } catch (err) {
      setError('Error al crear el menú: ' + err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setSelectedRestaurant(null);
    setMenu(null);
    setRestaurantTheme(null);
    setError(null);
    setLoading(false);
  }, []);

  return {
    selectedRestaurant,
    menu,
    restaurantTheme,
    loading,
    error,
    selectRestaurant,
    reset
  };
};
