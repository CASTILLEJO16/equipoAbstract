import { Postre } from '../Postre.js';

// Producto Concreto - Postre Italiano
export class Tiramisu extends Postre {
  constructor() {
    super("Tiramisú", "Postre clásico italiano con café, mascarpone y cacao");
  }
  
  servir() {
    console.log("Sirviendo Tiramisú fresco con espolvoreado de cacao");
  }
}
