import { PlatoFuerte } from '../PlatoFuerte.js';

// Producto Concreto - Plato Fuerte Indio
export class Curry extends PlatoFuerte {
  constructor() {
    super("Chicken Curry", "Curry de pollo cremoso con especias tradicionales y arroz basmati");
  }
  
  servir() {
    console.log("🍛 Sirviendo Chicken Curry caliente con naan recién hecho");
  }
}
