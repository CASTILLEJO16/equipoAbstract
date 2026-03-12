import { getRestaurantTheme } from './themes/RestaurantThemes';

// Datos optimizados - URLs más cortas y descripciones concisas
const MenuData = {
  chino: {
    plato: { n: "Chow Mein", d: "Fideos crujientes wok con vegetales frescos", i: "https://i.imgur.com/chowMein.jpg", t: "15m", p: false, c: ["Crujiente", "Ahumado"] },
    bebida: { n: "Té Jazmín", d: "Infusión floral relajante", i: "https://i.imgur.com/teJazmin.jpg", t: "5m", p: false, c: ["Floral", "Relajante"] },
    postre: { n: "Rollito Dulce", d: "Masa crujiente con nieve de vainilla", i: "https://i.imgur.com/rollito.jpg", t: "10m", p: false, c: ["Crujiente", "Dulce"] }
  },
  japones: {
    plato: { n: "Ramen", d: "Caldo 12h con fideos firmes y cerdo fundente", i: "https://i.imgur.com/ramen.jpg", t: "20m", p: true, c: ["Umami", "Fundente"] },
    bebida: { n: "Sake", d: "Destilado de arroz premium", i: "https://i.imgur.com/sake.jpg", t: "3m", p: false, c: ["Frutal", "Elegante"] },
    postre: { n: "Dango", d: "Esferas de arroz con glaseado dulce", i: "https://i.imgur.com/dango.jpg", t: "8m", p: false, c: ["Masticable", "Dulce"] }
  },
  mexicano: {
    plato: { n: "Tacos Asada", d: "Carne premium al carbón con tortilla fresca", i: "https://i.imgur.com/tacos.jpg", t: "18m", p: true, c: ["Ahumado", "Fresco"] },
    bebida: { n: "Agua Jamaica", d: "Hibisco natural refrescante", i: "https://i.imgur.com/jamaica.jpg", t: "5m", p: false, c: ["Cítrico", "Refrescante"] },
    postre: { n: "Tres Leches", d: "Bizcocho esponjoso bañado en cremas", i: "https://i.imgur.com/tresleches.jpg", t: "12m", p: false, c: ["Esponjoso", "Dulce"] }
  },
  italiano: {
    plato: { n: "Pizza Margherita", d: "Masa lenta con mozzarella di bufala", i: "https://i.imgur.com/pizza.jpg", t: "15m", p: false, c: ["Fresco", "Artesanal"] },
    bebida: { n: "Vino Chianti", d: "Vino toscano con notas de cereza", i: "https://i.imgur.com/vino.jpg", t: "4m", p: false, c: ["Especiado", "Elegante"] },
    postre: { n: "Tiramisú", d: "Capas de mascarpone con espresso", i: "https://i.imgur.com/tiramisu.jpg", t: "10m", p: false, c: ["Sedoso", "Intenso"] }
  },
  indio: {
    plato: { n: "Chicken Curry", d: "Pollo tierno en salsa especiada", i: "https://i.imgur.com/curry.jpg", t: "25m", p: true, c: ["Especiado", "Aromático"] },
    bebida: { n: "Lassi Mango", d: "Batido cremoso de yogur y mango", i: "https://i.imgur.com/lassi.jpg", t: "6m", p: false, c: ["Cremoso", "Tropical"] },
    postre: { n: "Gulab Jamun", d: "Esferas dulces en almíbar aromático", i: "https://i.imgur.com/gulab.jpg", t: "15m", p: false, c: ["Dorado", "Perfumado"] }
  }
};

// Clases base simplificadas
class Producto {
  constructor(data) {
    Object.assign(this, data);
  }
}

// Productos concretos
class Plato extends Producto { servir() { return `🍜 ${this.n}`; } }
class Bebida extends Producto { servir() { return `🥤 ${this.n}`; } }
class Postre extends Producto { servir() { return `🍰 ${this.n}`; } }

// Fábrica base
class FabricaBase {
  constructor(tipo) {
    this.tipo = tipo;
    this.data = MenuData[tipo];
  }
  
  crearPlato() { return new Plato(this.data.plato); }
  crearBebida() { return new Bebida(this.data.bebida); }
  crearPostre() { return new Postre(this.data.postre); }
  
  crearMenu() {
    return {
      plato: this.crearPlato(),
      bebida: this.crearBebida(),
      postre: this.crearPostre(),
      getInfo: () => ({
        plato: { ...this.crearPlato(), tipo: 'platoFuerte' },
        bebida: { ...this.crearBebida(), tipo: 'bebida' },
        postre: { ...this.crearPostre(), tipo: 'postre' }
      })
    };
  }
}

// Función principal optimizada
export function getFabrica(tipo) {
  return {
    fabrica: new FabricaBase(tipo),
    theme: getRestaurantTheme(tipo)
  };
}

export { MenuData };
