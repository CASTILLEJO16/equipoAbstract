import { FabricaRestaurante } from '../FabricaRestaurante.js';
import { Curry } from '../india/Curry.js';
import { Lassi } from '../india/Lassi.js';
import { GulabJamun } from '../india/GulabJamun.js';

// Fábrica Concreta - Restaurante Indio
export class FabricaRestauranteIndio extends FabricaRestaurante {
  crearPlatoFuerte() {
    return new Curry();
  }
  
  crearBebida() {
    return new Lassi();
  }
  
  crearPostre() {
    return new GulabJamun();
  }
}
