import { FabricaRestaurante } from '../FabricaRestaurante.js';
import { ChowMein } from '../china/ChowMein.js';
import { TeJazmin } from '../china/TeJazmin.js';
import { RollitoDulce } from '../china/RollitoDulce.js';

// Fábrica Concreta - Restaurante Chino
export class FabricaRestauranteChino extends FabricaRestaurante {
  crearPlatoFuerte() {
    return new ChowMein();
  }
  
  crearBebida() {
    return new TeJazmin();
  }
  
  crearPostre() {
    return new RollitoDulce();
  }
}
