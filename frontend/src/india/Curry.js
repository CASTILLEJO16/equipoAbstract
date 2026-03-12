import { PlatoFuerte } from '../RestaurantFactory.js';

// Producto Concreto - Plato Fuerte Indio
export class Curry extends PlatoFuerte {
  constructor() {
    super("Chicken Curry", "Curry de pollo cremoso con especias tradicionales y arroz basmati");
  }
  
  servir() {
    return "🍛 Sirviendo Chicken Curry caliente con naan recién hecho";
  }
}
