import { useState, useCallback } from 'react';
import { getFabrica } from '../RestaurantFactory';

export const useRestaurantFactory = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const selectRestaurant = useCallback((restaurante) => {
    setLoading(true);
    setError(null);
    
    try {
      const fabrica = getFabrica(restaurante.id);
      
      if (fabrica) {
        const nuevoMenu = fabrica.crearMenu();
        setSelectedRestaurant(restaurante);
        setMenu(nuevoMenu);
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
    setError(null);
    setLoading(false);
  }, []);

  return {
    selectedRestaurant,
    menu,
    loading,
    error,
    selectRestaurant,
    reset
  };
};
