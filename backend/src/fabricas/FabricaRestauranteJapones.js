import { FabricaRestaurante } from '../FabricaRestaurante.js';
import { Ramen } from '../japon/Ramen.js';
import { Sake } from '../japon/Sake.js';
import { Dango } from '../japon/Dango.js';

// Fábrica Concreta - Restaurante Japonés
export class FabricaRestauranteJapones extends FabricaRestaurante {
  crearPlatoFuerte() {
    return new Ramen();
  }
  
  crearBebida() {
    return new Sake();
  }
  
  crearPostre() {
    return new Dango();
  }
}
