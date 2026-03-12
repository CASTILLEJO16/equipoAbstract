# 🍽️ Sistema de Restaurantes - Patrón Abstract Factory

## 📋 Descripción del Proyecto

Implementación completa del patrón de diseño **Abstract Factory** para simular un sistema de restaurantes con diferentes tipos de cocina. El proyecto incluye:

- **Backend en JavaScript** con implementación pura del patrón
- **Frontend en React** con interfaz moderna y atractiva
- **Diagrama UML** completo del sistema
- **Documentación teórica** detallada

## 🎯 Objetivo del Patrón Abstract Factory

El patrón Abstract Factory es un patrón creacional que permite:

- Crear familias de objetos relacionados sin especificar sus clases concretas
- Proporcionar una interfaz para crear objetos de diferentes tipos que pertenecen a una misma familia
- Garantizar que los objetos creados sean compatibles entre sí
- Facilitar la adición de nuevas familias de productos sin modificar el código existente

## 🍜 Tipos de Cocina Implementados

### 🥢 Restaurante Chino
- **Plato Fuerte**: Chow Mein
- **Bebida**: Té Jazmín  
- **Postre**: Rollito Dulce con Nieve

### 🍱 Restaurante Japonés
- **Plato Fuerte**: Ramen
- **Bebida**: Sake
- **Postre**: Dango

### 🌮 Restaurante Mexicano
- **Plato Fuerte**: Tacos de Carne Asada
- **Bebida**: Agua de Jamaica
- **Postre**: Pastel de Tres Leches

## 📁 Estructura del Proyecto

```
equipo_abstract/
├── backend/                      # Backend JavaScript
│   ├── src/
│   │   ├── PlatoFuerte.js       # Producto abstracto
│   │   ├── Bebida.js            # Producto abstracto
│   │   ├── Postre.js            # Producto abstracto
│   │   ├── FabricaRestaurante.js # Fábrica abstracta
│   │   ├── Menu.js              # Clase de soporte
│   │   ├── Cliente.js           # Programa principal
│   │   ├── china/               # Productos concretos chinos
│   │   ├── japon/               # Productos concretos japoneses
│   │   ├── mexico/              # Productos concretos mexicanos
│   │   └── fabricas/            # Fábricas concretas
│   └── package.json
├── frontend/                     # Frontend React
│   ├── src/
│   │   ├── App.js               # Componente principal
│   │   ├── RestaurantFactory.js # Implementación JS del patrón
│   │   └── index.js             # Punto de entrada
│   ├── public/
│   └── package.json
├── Diagrama_UML.md               # Diagrama completo
└── README.md                     # Este archivo
```

## 🏗️ Componentes del Patrón

### 1️⃣ Productos Abstractos
Definen las interfaces para cada tipo de producto:

- **PlatoFuerte**: Define qué puede hacer un plato fuerte
- **Bebida**: Define qué puede hacer una bebida  
- **Postre**: Define qué puede hacer un postre

### 2️⃣ Productos Concretos
Implementaciones específicas para cada cocina:

```javascript
// Ejemplo - Plato fuerte chino
export class ChowMein extends PlatoFuerte {
  constructor() {
    super("Chow Mein", "Fideos chinos salteados...");
  }
  
  servir() {
    console.log("🍜 Sirviendo Chow Mein caliente...");
  }
}
```

### 3️⃣ Fábrica Abstracta
Define la interfaz para crear familias de productos:

```javascript
export class FabricaRestaurante {
  crearPlatoFuerte() {
    throw new Error("Debe ser implementado por la subclase");
  }
  
  crearBebida() {
    throw new Error("Debe ser implementado por la subclase");
  }
  
  crearPostre() {
    throw new Error("Debe ser implementado por la subclase");
  }
}
```

### 4️⃣ Fábricas Concretas
Implementan la creación de productos específicos:

```javascript
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
```

### 5️⃣ Cliente
Utiliza las fábricas sin conocer los detalles concretos:

```javascript
// El cliente trabaja con interfaces abstractas
const fabrica = new FabricaRestauranteChino();
const menu = fabrica.crearMenu();
menu.servirMenu();
```

## 🔄 Flujo del Sistema

1. **Selección**: El usuario elige el tipo de restaurante
2. **Creación**: El sistema selecciona la fábrica correspondiente
3. **Generación**: La fábrica crea el menú completo y consistente
4. **Presentación**: Se muestra el menú al usuario

## 💡 Beneficios del Patrón

### ¿Cómo evita usar mucho NEW?

**Sin patrón (acoplamiento fuerte)**:
```javascript
// El cliente debe conocer todas las clases concretas
const plato = new Ramen();
const bebida = new Sake();
const postre = new Dango();
```

**Con Abstract Factory (desacoplamiento)**:
```javascript
// El cliente solo trabaja con interfaces
const fabrica = new FabricaRestauranteJapones();
const menu = fabrica.crearMenu(); // La fábrica decide qué crear
```

### ¿Cómo agregar una nueva cocina?

Solo se necesita crear:

1. **Nuevos productos concretos**:
   - `Pizza`, `Vino`, `Tiramisu`

2. **Nueva fábrica concreta**:
   - `FabricaRestauranteItaliano`

**¡El código del cliente no cambia!**

## 🚀 Cómo Ejecutar

### Backend JavaScript
```bash
# Instalar dependencias
npm install

# Ejecutar backend
npm start
# o
npm run backend

# Para desarrollo con recarga automática
npm run dev-backend
```

### Frontend React
```bash
cd frontend
npm install
npm start
```

### Ejecutar todo el proyecto
```bash
# Instalar todo (backend y frontend)
npm run install-all

# Iniciar backend
npm start

# En otra terminal, iniciar frontend
npm run frontend
```

## 🛠️ Tecnologías Utilizadas

- **JavaScript ES6+** - Backend y patrón de diseño
- **Node.js** - Entorno de ejecución del backend
- **React 18** - Framework frontend moderno
- **Material-UI (MUI)** - Biblioteca de componentes UI
- **ES Modules** - Sistema de módulos moderno
- **Readline** - Interfaz de consola interactiva

## 📊 Diagrama UML

El proyecto incluye un diagrama UML completo en `Diagrama_UML.md` que muestra:

- Todas las clases y sus relaciones
- Herencia de productos y fábricas
- Dependencias entre componentes
- Flujo de creación de objetos

## 🎯 Puntos Clave para Recordar

1. **El cliente no conoce las clases concretas**
2. **Las fábricas garantizan consistencia entre productos**
3. **Fácil agregar nuevas familias de productos**
4. **Código mantenible y escalable**
5. **Principio de inversión de dependencias**

## 🔮 Extensiones Posibles

- Agregar más cocinas (italiana, india, tailandesa)
- Implementar sistema de reservas y pedidos
- Añadir valoración de restaurantes
- Conectar con base de datos real
- Implementar patrón Observer para notificaciones
- Agregar sistema de pagos

## 📚 Referencias

- **Design Patterns: Elements of Reusable Object-Oriented Software** - Gang of Four
- **Head First Design Patterns** - Eric Freeman, Elisabeth Freeman
- **Refactoring: Improving the Design of Existing Code** - Martin Fowler

---

**Este proyecto demuestra la implementación práctica del patrón Abstract Factory con una interfaz moderna y educativa, ideal para entender los beneficios de los patrones de diseño en el desarrollo de software.**
