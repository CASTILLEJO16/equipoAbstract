import { Postre } from '../RestaurantFactory.js';

// Producto Concreto - Postre Indio
export class GulabJamun extends Postre {
  constructor() {
    super("Gulab Jamun", "Dumplings dulces en jarabe de rosas y cardamomo");
  }
  
  servir() {
    return "🍮 Sirviendo Gulab Jamun bañado en jarabe aromático";
  }
}
