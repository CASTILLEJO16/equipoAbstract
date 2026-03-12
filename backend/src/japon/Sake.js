import { Bebida } from '../Bebida.js';

// Producto Concreto - Bebida Japonesa
export class Sake extends Bebida {
  constructor() {
    super("Sake", "Bebida alcohólica de arroz fermentado");
  }
  
  servir() {
    console.log("Sirviendo Sake caliente en vasos pequeños");
  }
}
