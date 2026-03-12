import { PlatoFuerte } from '../PlatoFuerte.js';

// Producto Concreto - Plato Fuerte Mexicano
export class TacosCarneAsada extends PlatoFuerte {
  constructor() {
    super("Tacos de Carne Asada", "Tacos con carne de res asada, cebolla, cilantro y limón");
  }
  
  servir() {
    console.log("Sirviendo Tacos de Carne Asada con salsa picante");
  }
}
