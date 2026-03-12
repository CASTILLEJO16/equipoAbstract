import { Bebida } from '../Bebida.js';

// Producto Concreto - Bebida China
export class TeJazmin extends Bebida {
  constructor() {
    super("Té Jazmín", "Té verde aromatizado con flores de jazmín");
  }
  
  servir() {
    console.log("🍵 Sirviendo Té Jazmín caliente en taza de porcelana");
  }
}
