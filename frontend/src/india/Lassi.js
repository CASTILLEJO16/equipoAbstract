import { Bebida } from '../RestaurantFactory.js';

// Producto Concreto - Bebida India
export class Lassi extends Bebida {
  constructor() {
    super("Lassi de Mango", "Bebida cremosa de yogur con mango dulce y hielo");
  }
  
  servir() {
    return "🥤 Sirviendo Lassi de Mango frío en vaso alto";
  }
}
