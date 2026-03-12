import { PlatoFuerte } from '../PlatoFuerte.js';

// Producto Concreto - Plato Fuerte Italiano
export class Pizza extends PlatoFuerte {
  constructor() {
    super("Pizza Margherita", "Pizza clásica con tomate, mozzarella y albahaca fresca");
  }
  
  servir() {
    console.log("Sirviendo Pizza Margherita caliente del horno de leña");
  }
}
