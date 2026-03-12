import { Postre } from '../Postre.js';

// Producto Concreto - Postre Chino
export class RollitoDulce extends Postre {
  constructor() {
    super("Rollito Dulce con Nieve", "Rollito de primavera dulce relleno de crema helada");
  }
  
  servir() {
    console.log("Sirviendo Rollito Dulce con nieve y sirope");
  }
}
