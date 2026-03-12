import { Postre } from '../RestaurantFactory.js';

// Producto Concreto - Postre Italiano
export class Tiramisu extends Postre {
  constructor() {
    super("Tiramisú", "Postre clásico italiano con café, mascarpone y cacao");
  }
  
  servir() {
    return "🍰 Sirviendo Tiramisú fresco con espolvoreado de cacao";
  }
}
