import { PlatoFuerte } from '../PlatoFuerte.js';

// Producto Concreto - Plato Fuerte Japonés
export class Ramen extends PlatoFuerte {
  constructor() {
    super("Ramen", "Sopa de fideos japonesa con cerdo, huevo y verduras");
  }
  
  servir() {
    console.log("🍜 Sirviendo Ramen caliente en tazón tradicional");
  }
}
