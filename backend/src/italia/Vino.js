import { Bebida } from '../Bebida.js';

// Producto Concreto - Bebida Italiana
export class Vino extends Bebida {
  constructor() {
    super("Vino Tinto Chianti", "Vino italiano clásico de la región de Toscana");
  }
  
  servir() {
    console.log("Sirviendo Vino Tinto en copa de cristal a temperatura ambiente");
  }
}
