import { Postre } from '../Postre.js';

// Producto Concreto - Postre Indio
export class GulabJamun extends Postre {
  constructor() {
    super("Gulab Jamun", "Dumplings dulces en jarabe de rosas y cardamomo");
  }
  
  servir() {
    console.log("Sirviendo Gulab Jamun bañado en jarabe aromático");
  }
}
