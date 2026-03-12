// Implementación del patrón Abstract Factory en JavaScript

// Productos Abstractos
class PlatoFuerte {
  constructor(nombre, descripcion) {
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
  
  servir() {
    throw new Error('Método abstracto - debe ser implementado');
  }
}

class Bebida {
  constructor(nombre, descripcion) {
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
  
  servir() {
    throw new Error('Método abstracto - debe ser implementado');
  }
}

class Postre {
  constructor(nombre, descripcion) {
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
  
  servir() {
    throw new Error('Método abstracto - debe ser implementado');
  }
}

// Productos Concretos - Cocina China
class ChowMein extends PlatoFuerte {
  constructor() {
    super("Chow Mein", "Fideos chinos salteados con verduras y salsa de soja");
  }
  
  servir() {
    return "Sirviendo Chow Mein caliente con palillos chinos";
  }
}

class TeJazmin extends Bebida {
  constructor() {
    super("Té Jazmín", "Té verde aromatizado con flores de jazmín");
  }
  
  servir() {
    return "Sirviendo Té Jazmín caliente en taza de porcelana";
  }
}

class RollitoDulce extends Postre {
  constructor() {
    super("Rollito Dulce con Nieve", "Rollito de primavera dulce relleno de crema helada");
  }
  
  servir() {
    return "Sirviendo Rollito Dulce con nieve y sirope";
  }
}

// Productos Concretos - Cocina Japonesa
class Ramen extends PlatoFuerte {
  constructor() {
    super("Ramen", "Sopa de fideos japonesa con cerdo, huevo y verduras");
  }
  
  servir() {
    return "Sirviendo Ramen caliente en tazón tradicional";
  }
}

class Sake extends Bebida {
  constructor() {
    super("Sake", "Bebida alcohólica de arroz fermentado");
  }
  
  servir() {
    return "Sirviendo Sake caliente en vasos pequeños";
  }
}

class Dango extends Postre {
  constructor() {
    super("Dango", "Dumplings dulces de arroz en brocheta con salsa");
  }
  
  servir() {
    return "Sirviendo Dango en brocheta con salsa dulce";
  }
}

// Productos Concretos - Cocina Mexicana
class TacosCarneAsada extends PlatoFuerte {
  constructor() {
    super("Tacos de Carne Asada", "Tacos con carne de res asada, cebolla, cilantro y limón");
  }
  
  servir() {
    return "Sirviendo Tacos de Carne Asada con salsa picante";
  }
}

class AguaJamaica extends Bebida {
  constructor() {
    super("Agua de Jamaica", "Bebida refrescante de flor de jamaica con hielo");
  }
  
  servir() {
    return "Sirviendo Agua de Jamaica fría con limón";
  }
}

class PastelTresLeches extends Postre {
  constructor() {
    super("Pastel de Tres Leches", "Pastel esponjoso empapado en tres tipos de leche");
  }
  
  servir() {
    return "Sirviendo Pastel de Tres Leches con crema y fresa";
  }
}

// Productos Concretos - Cocina Italiana
class Pizza extends PlatoFuerte {
  constructor() {
    super("Pizza Margherita", "Pizza clásica con tomate, mozzarella y albahaca fresca");
  }
  
  servir() {
    return "Sirviendo Pizza Margherita caliente del horno de leña";
  }
}

class Vino extends Bebida {
  constructor() {
    super("Vino Tinto Chianti", "Vino italiano clásico de la región de Toscana");
  }
  
  servir() {
    return "Sirviendo Vino Tinto en copa de cristal a temperatura ambiente";
  }
}

class Tiramisu extends Postre {
  constructor() {
    super("Tiramisú", "Postre clásico italiano con café, mascarpone y cacao");
  }
  
  servir() {
    return "Sirviendo Tiramisú fresco con espolvoreado de cacao";
  }
}

// Productos Concretos - Cocina India
class Curry extends PlatoFuerte {
  constructor() {
    super("Chicken Curry", "Curry de pollo cremoso con especias tradicionales y arroz basmati");
  }
  
  servir() {
    return "Sirviendo Chicken Curry caliente con naan recién hecho";
  }
}

class Lassi extends Bebida {
  constructor() {
    super("Lassi de Mango", "Bebida cremosa de yogur con mango dulce y hielo");
  }
  
  servir() {
    return "Sirviendo Lassi de Mango frío en vaso alto";
  }
}

class GulabJamun extends Postre {
  constructor() {
    super("Gulab Jamun", "Dumplings dulces en jarabe de rosas y cardamomo");
  }
  
  servir() {
    return "Sirviendo Gulab Jamun bañado en jarabe aromático";
  }
}

// Fábrica Abstracta
class FabricaRestaurante {
  crearPlatoFuerte() {
    throw new Error('Método abstracto - debe ser implementado');
  }
  
  crearBebida() {
    throw new Error('Método abstracto - debe ser implementado');
  }
  
  crearPostre() {
    throw new Error('Método abstracto - debe ser implementado');
  }
  
  crearMenu() {
    const plato = this.crearPlatoFuerte();
    const bebida = this.crearBebida();
    const postre = this.crearPostre();
    
    return new Menu(plato, bebida, postre);
  }
}

// Clase Menu
class Menu {
  constructor(platoFuerte, bebida, postre) {
    this.platoFuerte = platoFuerte;
    this.bebida = bebida;
    this.postre = postre;
  }
  
  getInfo() {
    return {
      plato: {
        nombre: this.platoFuerte.nombre,
        descripcion: this.platoFuerte.descripcion,
        servicio: this.platoFuerte.servir()
      },
      bebida: {
        nombre: this.bebida.nombre,
        descripcion: this.bebida.descripcion,
        servicio: this.bebida.servir()
      },
      postre: {
        nombre: this.postre.nombre,
        descripcion: this.postre.descripcion,
        servicio: this.postre.servir()
      }
    };
  }
}

// Fábricas Concretas
class FabricaRestauranteChino extends FabricaRestaurante {
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

class FabricaRestauranteJapones extends FabricaRestaurante {
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

class FabricaRestauranteMexicano extends FabricaRestaurante {
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

class FabricaRestauranteItaliano extends FabricaRestaurante {
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

class FabricaRestauranteIndio extends FabricaRestaurante {
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

// Función para obtener fábrica según el tipo
export function getFabrica(tipoRestaurante) {
  switch (tipoRestaurante) {
    case 'chino':
      return new FabricaRestauranteChino();
    case 'japones':
      return new FabricaRestauranteJapones();
    case 'mexicano':
      return new FabricaRestauranteMexicano();
    case 'italiano':
      return new FabricaRestauranteItaliano();
    case 'indio':
      return new FabricaRestauranteIndio();
    default:
      return null;
  }
}

export { Menu };
