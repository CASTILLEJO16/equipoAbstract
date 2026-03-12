import { Postre } from '../Postre.js';

// Producto Concreto - Postre Mexicano
export class PastelTresLeches extends Postre {
  constructor() {
    super("Pastel de Tres Leches", "Pastel esponjoso empapado en tres tipos de leche");
  }
  
  servir() {
    console.log("Sirviendo Pastel de Tres Leches con crema y fresa");
  }
}
