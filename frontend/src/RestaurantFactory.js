// Base de datos de imágenes y descripciones sensoriales
const MenuData = {
  chino: {
    platoFuerte: {
      nombre: "Chow Mein",
      descripcion: "Fideos crujientes salteados al wok con vegetales frescos y un toque ahumado de salsa de soya premium",
      imagen: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=992&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tiempo: "15 min",
      picante: false,
      caracteristicas: ["Crujiente", "Ahumado", "Umami"]
    },
    bebida: {
      nombre: "Té Jazmín",
      descripcion: "Infusión floral delicada con notas de miel y un aroma relajante que purifica el paladar",
      imagen: "https://images.unsplash.com/photo-1597318181302-0466233a784e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tiempo: "5 min",
      picante: false,
      caracteristicas: ["Floral", "Relajante", "Purificador"]
    },
    postre: {
      nombre: "Rollito Dulce con Nieve",
      descripcion: "Masa dorada y crujiente rellena de pasta dulce, coronada con nieve de vainilla aterciopelada",
      imagen: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tiempo: "10 min",
      picante: false,
      caracteristicas: ["Crujiente", "Aterciopelado", "Dulce"]
    }
  },
  japones: {
    platoFuerte: {
      nombre: "Ramen",
      descripcion: "Caldo concentrado 12 horas con fideos firmes, cerdo fundente y huevo marinado con sabor umami profundo",
      imagen: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tiempo: "20 min",
      picante: true,
      caracteristicas: ["Umami", "Fundente", "Concentrado"]
    },
    bebida: {
      nombre: "Sake",
      descripcion: "Destilado de arroz premium con notas frutales sutiles y un final limpio y elegante",
      imagen: "https://images.unsplash.com/photo-1589961546603-d4281f3cfdfa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tiempo: "3 min",
      picante: false,
      caracteristicas: ["Frutal", "Elegante", "Puro"]
    },
    postre: {
      nombre: "Dango",
      descripcion: "Esferas de arroz masticables y reconfortantes, bañadas en glaseado dulce de soya tradicional",
      imagen: "https://images.unsplash.com/photo-1601317266542-4f4abae2cca4?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tiempo: "8 min",
      picante: false,
      caracteristicas: ["Masticable", "Reconfortante", "Tradicional"]
    }
  },
  mexicano: {
    platoFuerte: {
      nombre: "Tacos de Carne Asada",
      descripcion: "Cortes premium de res asados al carbón, servidos en tortilla de maíz recién hecha con jardín de cebolla y cilantro fresco",
      imagen: "https://images.unsplash.com/photo-1707603571504-86c1ea50903e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tiempo: "18 min",
      picante: true,
      caracteristicas: ["Ahumado", "Fresco", "Artesanal"]
    },
    bebida: {
      nombre: "Agua de Jamaica",
      descripcion: "Extracto natural de flores de hibisco seleccionadas, servida bien fría con un toque cítrico refrescante",
      imagen: "https://images.unsplash.com/photo-1730190981086-5e6dea8a8b24?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tiempo: "5 min",
      picante: false,
      caracteristicas: ["Cítrico", "Refrescante", "Natural"]
    },
    postre: {
      nombre: "Pastel de Tres Leches",
      descripcion: "Bizcocho ultra-esponjoso bañado en nuestra mezcla secreta de cremas, coronado con canela y un toque de dulce",
      imagen: "https://images.unsplash.com/photo-1673974798330-23e8f4c9ae05?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tiempo: "12 min",
      picante: false,
      caracteristicas: ["Esponjoso", "Aterciopelado", "Dulce"]
    }
  },
  italiano: {
    platoFuerte: {
      nombre: "Pizza Margherita",
      descripcion: "Masa de fermentación lenta con salsa San Marzano, mozzarella di bufala hilada y albahaca fresca del huerto",
      imagen: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tiempo: "15 min",
      picante: false,
      caracteristicas: ["Fresco", "Hilado", "Artesanal"]
    },
    bebida: {
      nombre: "Vino Tinto Chianti",
      descripcion: "Vino toscano con cuerpo medio, notas de cerezas negras y un final especiado que evoca la campiña italiana",
      imagen: "https://images.unsplash.com/photo-1594986138018-cb0b6c2609d2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tiempo: "4 min",
      picante: false,
      caracteristicas: ["Especiado", "Cuerpo medio", "Elegante"]
    },
    postre: {
      nombre: "Tiramisú",
      descripcion: "Capas sedosas de mascarpone y bizcochos soletilla empapados en espresso intenso, espolvoreados con cacao amargo",
      imagen: "https://images.unsplash.com/photo-1639744211487-b27e3551b07c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tiempo: "10 min",
      picante: false,
      caracteristicas: ["Sedoso", "Intenso", "Amargo"]
    }
  },
  indio: {
    platoFuerte: {
      nombre: "Chicken Curry",
      descripcion: "Pollo tierno en salsa aterciopelada de especias exóticas, cúrcuma dorada y cremosidad intensa sobre arroz basmati aromático",
      imagen: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tiempo: "25 min",
      picante: true,
      caracteristicas: ["Aterciopelado", "Especiado", "Aromático"]
    },
    bebida: {
      nombre: "Lassi de Mango",
      descripcion: "Batido cremoso de yogur natural con pulpa de mango Alphonso, la combinación perfecta de dulce tropical y frescor",
      imagen: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tiempo: "6 min",
      picante: false,
      caracteristicas: ["Cremoso", "Tropical", "Fresco"]
    },
    postre: {
      nombre: "Gulab Jamun",
      descripcion: "Esferas doradas de leche frita, sumergidas en almíbar tibio perfumado con agua de rosas y cardamomo aromático",
      imagen: "https://images.unsplash.com/photo-1646578515903-67873a5398f9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tiempo: "15 min",
      picante: false,
      caracteristicas: ["Dorado", "Aromático", "Perfumado"]
    }
  }
};

// Implementación del patrón Abstract Factory en JavaScript
import { getRestaurantTheme } from './themes/RestaurantThemes';

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
  constructor(restauranteId) {
    const data = MenuData[restauranteId]?.platoFuerte || {
      nombre: "Chow Mein",
      descripcion: "Fideos crujientes salteados al wok",
      imagen: "",
      tiempo: "15 min",
      picante: false,
      caracteristicas: ["Crujiente", "Ahumado"]
    };
    super(data.nombre, data.descripcion);
    this.data = data;
  }
  
  servir() {
    return "🍜 Sirviendo Chow Mein caliente con palillos chinos";
  }
}

class TeJazmin extends Bebida {
  constructor(restauranteId) {
    const data = MenuData[restauranteId]?.bebida || {
      nombre: "Té Jazmín",
      descripcion: "Infusión floral delicada",
      imagen: "",
      tiempo: "5 min",
      picante: false,
      caracteristicas: ["Floral", "Relajante"]
    };
    super(data.nombre, data.descripcion);
    this.data = data;
  }
  
  servir() {
    return "🍵 Sirviendo Té Jazmín caliente en taza de porcelana";
  }
}

class RollitoDulce extends Postre {
  constructor(restauranteId) {
    const data = MenuData[restauranteId]?.postre || {
      nombre: "Rollito Dulce con Nieve",
      descripcion: "Rollito de primavera dulce relleno de crema helada",
      imagen: "",
      tiempo: "10 min",
      picante: false,
      caracteristicas: ["Crujiente", "Dulce"]
    };
    super(data.nombre, data.descripcion);
    this.data = data;
  }
  
  servir() {
    return "🍰 Sirviendo Rollito Dulce con nieve y sirope";
  }
}

// Productos Concretos - Cocina Japonesa
class Ramen extends PlatoFuerte {
  constructor(restauranteId) {
    const data = MenuData[restauranteId]?.platoFuerte || {
      nombre: "Ramen",
      descripcion: "Sopa de fideos japonesa con cerdo, huevo y verduras",
      imagen: "",
      tiempo: "20 min",
      picante: true,
      caracteristicas: ["Umami", "Fundente"]
    };
    super(data.nombre, data.descripcion);
    this.data = data;
  }
  
  servir() {
    return "🍜 Sirviendo Ramen caliente en tazón tradicional";
  }
}

class Sake extends Bebida {
  constructor(restauranteId) {
    const data = MenuData[restauranteId]?.bebida || {
      nombre: "Sake",
      descripcion: "Bebida alcohólica de arroz fermentado",
      imagen: "",
      tiempo: "3 min",
      picante: false,
      caracteristicas: ["Frutal", "Elegante"]
    };
    super(data.nombre, data.descripcion);
    this.data = data;
  }
  
  servir() {
    return "🍶 Sirviendo Sake caliente en vasos pequeños";
  }
}

class Dango extends Postre {
  constructor(restauranteId) {
    const data = MenuData[restauranteId]?.postre || {
      nombre: "Dango",
      descripcion: "Dumplings dulces de arroz en brocheta con salsa",
      imagen: "",
      tiempo: "8 min",
      picante: false,
      caracteristicas: ["Masticable", "Reconfortante"]
    };
    super(data.nombre, data.descripcion);
    this.data = data;
  }
  
  servir() {
    return "🍡 Sirviendo Dango en brocheta con salsa dulce";
  }
}

// Productos Concretos - Cocina Mexicana
class TacosCarneAsada extends PlatoFuerte {
  constructor(restauranteId) {
    const data = MenuData[restauranteId]?.platoFuerte || {
      nombre: "Tacos de Carne Asada",
      descripcion: "Tacos con carne de res asada, cebolla, cilantro y limón",
      imagen: "",
      tiempo: "18 min",
      picante: true,
      caracteristicas: ["Ahumado", "Fresco"]
    };
    super(data.nombre, data.descripcion);
    this.data = data;
  }
  
  servir() {
    return "🌮 Sirviendo Tacos de Carne Asada con salsa picante";
  }
}

class AguaJamaica extends Bebida {
  constructor(restauranteId) {
    const data = MenuData[restauranteId]?.bebida || {
      nombre: "Agua de Jamaica",
      descripcion: "Bebida refrescante de flor de jamaica con hielo",
      imagen: "",
      tiempo: "5 min",
      picante: false,
      caracteristicas: ["Cítrico", "Refrescante"]
    };
    super(data.nombre, data.descripcion);
    this.data = data;
  }
  
  servir() {
    return "🍹 Sirviendo Agua de Jamaica fría con limón";
  }
}

class PastelTresLeches extends Postre {
  constructor(restauranteId) {
    const data = MenuData[restauranteId]?.postre || {
      nombre: "Pastel de Tres Leches",
      descripcion: "Pastel esponjoso empapado en tres tipos de leche",
      imagen: "",
      tiempo: "12 min",
      picante: false,
      caracteristicas: ["Esponjoso", "Dulce"]
    };
    super(data.nombre, data.descripcion);
    this.data = data;
  }
  
  servir() {
    return "🍰 Sirviendo Pastel de Tres Leches con crema y fresa";
  }
}

// Productos Concretos - Cocina Italiana
class Pizza extends PlatoFuerte {
  constructor(restauranteId) {
    const data = MenuData[restauranteId]?.platoFuerte || {
      nombre: "Pizza Margherita",
      descripcion: "Pizza clásica con tomate, mozzarella y albahaca fresca",
      imagen: "",
      tiempo: "15 min",
      picante: false,
      caracteristicas: ["Fresco", "Artesanal"]
    };
    super(data.nombre, data.descripcion);
    this.data = data;
  }
  
  servir() {
    return "🍕 Sirviendo Pizza Margherita caliente del horno de leña";
  }
}

class Vino extends Bebida {
  constructor(restauranteId) {
    const data = MenuData[restauranteId]?.bebida || {
      nombre: "Vino Tinto Chianti",
      descripcion: "Vino italiano clásico de la región de Toscana",
      imagen: "",
      tiempo: "4 min",
      picante: false,
      caracteristicas: ["Especiado", "Elegante"]
    };
    super(data.nombre, data.descripcion);
    this.data = data;
  }
  
  servir() {
    return "🍷 Sirviendo Vino Tinto en copa de cristal a temperatura ambiente";
  }
}

class Tiramisu extends Postre {
  constructor(restauranteId) {
    const data = MenuData[restauranteId]?.postre || {
      nombre: "Tiramisú",
      descripcion: "Postre clásico italiano con café, mascarpone y cacao",
      imagen: "",
      tiempo: "10 min",
      picante: false,
      caracteristicas: ["Sedoso", "Intenso"]
    };
    super(data.nombre, data.descripcion);
    this.data = data;
  }
  
  servir() {
    return "🍰 Sirviendo Tiramisú fresco con espolvoreado de cacao";
  }
}

// Productos Concretos - Cocina India
class Curry extends PlatoFuerte {
  constructor(restauranteId) {
    const data = MenuData[restauranteId]?.platoFuerte || {
      nombre: "Chicken Curry",
      descripcion: "Curry de pollo cremoso con especias tradicionales y arroz basmati",
      imagen: "",
      tiempo: "25 min",
      picante: true,
      caracteristicas: ["Aterciopelado", "Especiado"]
    };
    super(data.nombre, data.descripcion);
    this.data = data;
  }
  
  servir() {
    return "🍛 Sirviendo Chicken Curry caliente con naan recién hecho";
  }
}

class Lassi extends Bebida {
  constructor(restauranteId) {
    const data = MenuData[restauranteId]?.bebida || {
      nombre: "Lassi de Mango",
      descripcion: "Bebida cremosa de yogur con mango dulce y hielo",
      imagen: "",
      tiempo: "6 min",
      picante: false,
      caracteristicas: ["Cremoso", "Tropical"]
    };
    super(data.nombre, data.descripcion);
    this.data = data;
  }
  
  servir() {
    return "🥤 Sirviendo Lassi de Mango frío en vaso alto";
  }
}

class GulabJamun extends Postre {
  constructor(restauranteId) {
    const data = MenuData[restauranteId]?.postre || {
      nombre: "Gulab Jamun",
      descripcion: "Dumplings dulces en jarabe de rosas y cardamomo",
      imagen: "",
      tiempo: "15 min",
      picante: false,
      caracteristicas: ["Dorado", "Aromático"]
    };
    super(data.nombre, data.descripcion);
    this.data = data;
  }
  
  servir() {
    return "🍮 Sirviendo Gulab Jamun bañado en jarabe aromático";
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
        servicio: this.platoFuerte.servir(),
        ...this.platoFuerte.data
      },
      bebida: {
        nombre: this.bebida.nombre,
        descripcion: this.bebida.descripcion,
        servicio: this.bebida.servir(),
        ...this.bebida.data
      },
      postre: {
        nombre: this.postre.nombre,
        descripcion: this.postre.descripcion,
        servicio: this.postre.servir(),
        ...this.postre.data
      }
    };
  }
}

// Fábricas Concretas
class FabricaRestauranteChino extends FabricaRestaurante {
  constructor(restauranteId) {
    super();
    this.restauranteId = restauranteId;
  }
  
  crearPlatoFuerte() {
    return new ChowMein(this.restauranteId);
  }
  
  crearBebida() {
    return new TeJazmin(this.restauranteId);
  }
  
  crearPostre() {
    return new RollitoDulce(this.restauranteId);
  }
}

class FabricaRestauranteJapones extends FabricaRestaurante {
  constructor(restauranteId) {
    super();
    this.restauranteId = restauranteId;
  }
  
  crearPlatoFuerte() {
    return new Ramen(this.restauranteId);
  }
  
  crearBebida() {
    return new Sake(this.restauranteId);
  }
  
  crearPostre() {
    return new Dango(this.restauranteId);
  }
}

class FabricaRestauranteMexicano extends FabricaRestaurante {
  constructor(restauranteId) {
    super();
    this.restauranteId = restauranteId;
  }
  
  crearPlatoFuerte() {
    return new TacosCarneAsada(this.restauranteId);
  }
  
  crearBebida() {
    return new AguaJamaica(this.restauranteId);
  }
  
  crearPostre() {
    return new PastelTresLeches(this.restauranteId);
  }
}

class FabricaRestauranteItaliano extends FabricaRestaurante {
  constructor(restauranteId) {
    super();
    this.restauranteId = restauranteId;
  }
  
  crearPlatoFuerte() {
    return new Pizza(this.restauranteId);
  }
  
  crearBebida() {
    return new Vino(this.restauranteId);
  }
  
  crearPostre() {
    return new Tiramisu(this.restauranteId);
  }
}

class FabricaRestauranteIndio extends FabricaRestaurante {
  constructor(restauranteId) {
    super();
    this.restauranteId = restauranteId;
  }
  
  crearPlatoFuerte() {
    return new Curry(this.restauranteId);
  }
  
  crearBebida() {
    return new Lassi(this.restauranteId);
  }
  
  crearPostre() {
    return new GulabJamun(this.restauranteId);
  }
}

// Función para obtener fábrica según el tipo
export function getFabrica(tipoRestaurante) {
  const theme = getRestaurantTheme(tipoRestaurante);
  
  switch (tipoRestaurante) {
    case 'chino':
      return { 
        fabrica: new FabricaRestauranteChino(tipoRestaurante), 
        theme 
      };
    case 'japones':
      return { 
        fabrica: new FabricaRestauranteJapones(tipoRestaurante), 
        theme 
      };
    case 'mexicano':
      return { 
        fabrica: new FabricaRestauranteMexicano(tipoRestaurante), 
        theme 
      };
    case 'italiano':
      return { 
        fabrica: new FabricaRestauranteItaliano(tipoRestaurante), 
        theme 
      };
    case 'indio':
      return { 
        fabrica: new FabricaRestauranteIndio(tipoRestaurante), 
        theme 
      };
    default:
      return { 
        fabrica: null, 
        theme: getRestaurantTheme('mexicano') // Default a México
      };
  }
}

export { Menu };
