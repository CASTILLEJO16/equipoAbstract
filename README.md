# Sistema de Restaurantes - Patrón Abstract Factory

## Descripción del Proyecto

Implementación completa del patrón de diseño **Abstract Factory** para simular un sistema de restaurantes con diferentes tipos de cocina. El proyecto incluye:

- **Backend en JavaScript** con implementación pura del patrón
- **Frontend en React** con interfaz moderna y atractiva
- **Diagrama UML** completo del sistema
- **Documentación teórica** detallada

## Objetivo del Patrón Abstract Factory

El patrón Abstract Factory es un patrón creacional que permite:

- Crear familias de objetos relacionados sin especificar sus clases concretas
- Proporcionar una interfaz para crear objetos de diferentes tipos que pertenecen a una misma familia
- Garantizar que los objetos creados sean compatibles entre sí
- Facilitar la adición de nuevas familias de productos sin modificar el código existente

## Tipos de Cocina Implementados

### Restaurante Chino
- **Plato Fuerte**: Chow Mein - Fideos chinos salteados con verduras y salsa de soja
- **Bebida**: Té Jazmín - Té verde aromatizado con flores de jazmín
- **Postre**: Rollito Dulce con Nieve - Rollito de primavera dulce relleno de crema helada

### Restaurante Japonés
- **Plato Fuerte**: Ramen - Sopa de fideos japonesa con cerdo, huevo y verduras
- **Bebida**: Sake - Bebida alcohólica de arroz fermentado
- **Postre**: Dango - Dumplings dulces de arroz en brocheta con salsa

### Restaurante Mexicano
- **Plato Fuerte**: Tacos de Carne Asada - Tacos con carne de res asada, cebolla, cilantro y limón
- **Bebida**: Agua de Jamaica - Bebida refrescante de flor de jamaica con hielo
- **Postre**: Pastel de Tres Leches - Pastel esponjoso empapado en tres tipos de leche

### Restaurante Italiano
- **Plato Fuerte**: Pizza Margherita - Pizza clásica con tomate, mozzarella y albahaca fresca
- **Bebida**: Vino Tinto Chianti - Vino italiano clásico de la región de Toscana
- **Postre**: Tiramisú - Postre clásico italiano con café, mascarpone y cacao

### Restaurante Indio
- **Plato Fuerte**: Chicken Curry - Curry de pollo cremoso con especias tradicionales y arroz basmati
- **Bebida**: Lassi de Mango - Bebida cremosa de yogur con mango dulce y hielo
- **Postre**: Gulab Jamun - Dumplings dulces en jarabe de rosas y cardamomo

## Estructura del Proyecto

```
equipo_abstract/
├──
├── frontend/                     # Frontend React
│   ├── public/
│   │   ├── index.html          # HTML principal
│   │   └── favicon.ico         # Ícono del sitio
│   ├── src/
│   │   ├── components/         # Componentes React reutilizables
│   │   │   ├── Header.js       # Cabecera con información del proyecto
│   │   │   ├── RestaurantCard.js # Cards para seleccionar restaurantes
│   │   │   ├── MenuCard.js     # Cards para mostrar menús
│   │   │   └── PatternInfo.js # Información educativa del patrón
│   │   ├── hooks/             # Custom hooks de React
│   │   │   └── useRestaurantFactory.js # Lógica del patrón Abstract Factory
│   │   ├── styles/            # Estilos y tema
│   │   │   ├── theme.js        # Configuración de Material-UI
│   │   │   └── GlobalStyles.js # Animaciones y estilos globales
│   │   ├── RestaurantFactory.js # Implementación completa del patrón
│   │   ├── App.js             # Componente principal
│   │   └── index.js           # Punto de entrada
│   ├── package.json            # Dependencias y scripts
│   ├── .eslintrc.js          # Configuración de ESLint
│   └── README.md              # Documentación del frontend
├── Diagrama_UML.md               # Diagrama del patrón
└── README.md                     # Documentación principal
```

## Tecnologías Utilizadas

### **Backend**
- **JavaScript ES6+**: Clases, módulos y sintaxis moderna
- **Node.js**: Entorno de ejecución JavaScript
- **ES Modules**: Sistema de importación/exportación
- **Readline**: Interacción por consola con el usuario

### **Frontend**
- **React 18**: Biblioteca para construir interfaces de usuario
- **Material-UI v5**: Framework de componentes de Google
- **JavaScript ES6+**: Implementación del patrón
- **CSS-in-JS**: Estilizado con Material-UI y Emotion
- **React Hooks**: Estado y efectos personalizados
- **ESLint**: Calidad de código

## Instalación y Ejecución

### **Prerrequisitos**
- Node.js 16+ instalado
- npm o yarn para gestión de paquetes

### **Backend - Consola**
1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar aplicación**:
   ```bash
   npm start
   ```

3. **Seguir instrucciones** en consola para seleccionar restaurante

### **Frontend - Web**
1. **Instalar dependencias**:
   ```bash
   cd frontend
   npm install
   ```

2. **Iniciar aplicación**:
   ```bash
   npm start
   ```

3. **Abrir en navegador**: http://localhost:3000

### **Scripts Disponibles**
- `npm start` - Inicia backend (consola)
- `npm run backend` - Inicia backend específico
- `npm run frontend` - Inicia frontend web
- `npm run dev-backend` - Modo desarrollo backend
- `npm run install-all` - Instala dependencias de ambos

## Guía de Usuario

### **Backend - Interacción por Consola**
1. Ejecuta `npm start` desde la raíz del proyecto
2. Selecciona el tipo de restaurante (1-5)
3. Observa el menú generado automáticamente
4. Aprende sobre el patrón Abstract Factory

### **Frontend - Interfaz Web**
1. Explora los 5 restaurantes disponibles
2. Haz click en el restaurante de tu preferencia
3. Observa el efecto de selección con gradientes
4. Visualiza el menú completo con animaciones

## Arquitectura del Patrón

### **Componentes del Patrón Abstract Factory**
- **AbstractProduct**: Clases base (PlatoFuerte, Bebida, Postre)
- **ConcreteProduct**: Implementaciones específicas (Pizza, Ramen, Tacos, etc.)
- **AbstractFactory**: Interfaz para crear familias de productos
- **ConcreteFactory**: Implementaciones por cocina
- **Client**: Programa que utiliza las fábricas

### **Flujo de Ejecución**
1. **Cliente selecciona** tipo de restaurante
2. **Sistema crea** fábrica correspondiente
3. **Fábrica genera** menú completo
4. **Cliente utiliza** menú sin conocer detalles concretos

## Beneficios del Patrón Implementado

### **Ventajas del Patrón**
- **Desacoplamiento**: Cliente independiente de clases concretas
- **Consistencia**: Productos de la misma familia son compatibles
- **Flexibilidad**: Fácil agregar nuevas cocinas
- **Mantenimiento**: Cambios localizados sin afectar otras cocinas
- **Testing**: Cada componente puede probarse individualmente

### **Beneficios del Proyecto**
- **Educación**: Aprendizaje práctico del patrón
- **Moderno**: Uso de tecnologías actuales
- **Completo**: Backend y frontend funcionales
- **Escalable**: Arquitectura fácil de extender

## Comparación de Implementaciones

| Característica | Backend (Consola) | Frontend (Web) |
|---------------|-------------------|-----------------|
| Interfaz | Línea de comandos | Visual interactiva |
| Animaciones | Texto estático | Transiciones fluidas |
| Responsividad | Terminal | Móvil y escritorio |
| Colores | Monocromático | Gradientes dinámicos |
| Experiencia | Educativa | Profesional |

## Actualizaciones Futuras

### **Mejoras Planeadas**
- [ ] Sistema de calificación de restaurantes
- [ ] Modo oscuro/claro en frontend
- [ ] Animaciones más complejas
- [ ] Integración con API real de restaurantes
- [ ] Sistema de favoritos y preferencias
- [ ] Testing automatizado completo
- [ ] Despliegue en producción

## Licencia

MIT License - Libre para uso comercial y educativo

## Autores

Proyecto educativo desarrollado para demostrar la implementación práctica del patrón Abstract Factory con JavaScript y React.

---

**¡Disfruta aprendiendo sobre patrones de diseño con este proyecto interactivo!**
