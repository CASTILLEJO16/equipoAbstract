import { Bebida } from '../Bebida.js';

// Producto Concreto - Bebida Mexicana
export class AguaJamaica extends Bebida {
  constructor() {
    super("Agua de Jamaica", "Bebida refrescante de flor de jamaica con hielo");
  }
  
  servir() {
    console.log("Sirviendo Agua de Jamaica fría con limón");
  }
}
