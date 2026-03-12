import { Bebida } from '../RestaurantFactory.js';

// Producto Concreto - Bebida Italiana
export class Vino extends Bebida {
  constructor() {
    super("Vino Tinto Chianti", "Vino italiano clásico de la región de Toscana");
  }
  
  servir() {
    return "🍷 Sirviendo Vino Tinto en copa de cristal a temperatura ambiente";
  }
}
