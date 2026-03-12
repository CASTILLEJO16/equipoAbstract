import { Postre } from '../Postre.js';

// Producto Concreto - Postre Japonés
export class Dango extends Postre {
  constructor() {
    super("Dango", "Dumplings dulces de arroz en brocheta con salsa");
  }
  
  servir() {
    console.log("Sirviendo Dango en brocheta con salsa dulce");
  }
}
