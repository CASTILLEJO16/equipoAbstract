import { FabricaRestaurante } from '../FabricaRestaurante.js';
import { TacosCarneAsada } from '../mexico/TacosCarneAsada.js';
import { AguaJamaica } from '../mexico/AguaJamaica.js';
import { PastelTresLeches } from '../mexico/PastelTresLeches.js';

// Fábrica Concreta - Restaurante Mexicano
export class FabricaRestauranteMexicano extends FabricaRestaurante {
  crearPlatoFuerte() {
    return new TacosCarneAsada();
  }
  
  crearBebida() {
    return new AguaJamaica();
  }
  
  crearPostre() {
    return new PastelTresLeches();
  }
}
