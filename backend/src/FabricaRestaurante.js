import { PlatoFuerte } from './PlatoFuerte.js';
import { Bebida } from './Bebida.js';
import { Postre } from './Postre.js';
import { Menu } from './Menu.js';

// Fábrica Abstracta
export class FabricaRestaurante {
  constructor() {
    if (this.constructor === FabricaRestaurante) {
      throw new Error("FabricaRestaurante es una clase abstracta y no puede ser instanciada directamente");
    }
  }
  
  // Métodos de fábrica para crear productos
  crearPlatoFuerte() {
    throw new Error("El método crearPlatoFuerte() debe ser implementado por la subclase");
  }
  
  crearBebida() {
    throw new Error("El método crearBebida() debe ser implementado por la subclase");
  }
  
  crearPostre() {
    throw new Error("El método crearPostre() debe ser implementado por la subclase");
  }
  
  // Método para crear un menú completo
  crearMenu() {
    const plato = this.crearPlatoFuerte();
    const bebida = this.crearBebida();
    const postre = this.crearPostre();
    
    return new Menu(plato, bebida, postre);
  }
}
