import { PlatoFuerte } from '../PlatoFuerte.js';

// Producto Concreto - Plato Fuerte Chino
export class ChowMein extends PlatoFuerte {
  constructor() {
    super("Chow Mein", "Fideos chinos salteados con verduras y salsa de soja");
  }
  
  servir() {
    console.log("Sirviendo Chow Mein caliente con palillos chinos");
  }
}
