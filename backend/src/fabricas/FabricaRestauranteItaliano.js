import { FabricaRestaurante } from '../FabricaRestaurante.js';
import { Pizza } from '../italia/Pizza.js';
import { Vino } from '../italia/Vino.js';
import { Tiramisu } from '../italia/Tiramisu.js';

// Fábrica Concreta - Restaurante Italiano
export class FabricaRestauranteItaliano extends FabricaRestaurante {
  crearPlatoFuerte() {
    return new Pizza();
  }
  
  crearBebida() {
    return new Vino();
  }
  
  crearPostre() {
    return new Tiramisu();
  }
}
