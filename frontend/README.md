# Sistema de Restaurantes - Frontend React

Aplicación web moderna construida con **React 18** y **Material-UI v5** que implementa el patrón de diseño **Abstract Factory** para simular un sistema de restaurantes con diferentes tipos de cocina.

## Objetivo del Patrón

El patrón Abstract Factory permite crear familias de objetos relacionados (platos, bebidas, postres) sin especificar sus clases concretas. Esto proporciona:

- **Desacoplamiento**: El cliente no depende de clases concretas
- **Consistencia**: Los productos creados son compatibles entre sí
- **Flexibilidad**: Fácil agregar nuevas cocinas sin modificar código existente
- **Mantenimiento**: Cambios en una cocina no afectan a las demás

## Cocinas Disponibles

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

## Arquitectura del Proyecto

```
frontend/
├── public/
│   ├── index.html          # HTML principal
│   └── favicon.ico         # Ícono del sitio
├── src/
│   ├── components/         # Componentes React reutilizables
│   │   ├── Header.js       # Cabecera con información del proyecto
│   │   ├── RestaurantCard.js # Cards para seleccionar restaurantes
│   │   ├── MenuCard.js     # Cards para mostrar menús
│   │   └── PatternInfo.js # Información educativa del patrón
│   ├── hooks/             # Custom hooks de React
│   │   └── useRestaurantFactory.js # Lógica del patrón Abstract Factory
│   ├── styles/            # Estilos y tema
│   │   ├── theme.js        # Configuración de Material-UI
│   │   └── GlobalStyles.js # Animaciones y estilos globales
│   ├── RestaurantFactory.js # Implementación completa del patrón
│   ├── App.js             # Componente principal
│   └── index.js           # Punto de entrada
├── package.json            # Dependencias y scripts
├── .eslintrc.js          # Configuración de ESLint
└── README.md              # Documentación
```

## Tecnologías Utilizadas

### **Frontend**
- **React 18**: Biblioteca para construir interfaces de usuario
- **Material-UI v5**: Framework de componentes de Google
- **JavaScript ES6+**: Sintaxis moderna con clases y módulos
- **CSS-in-JS**: Estilos dinámicos con Material-UI
- **ESLint**: Calidad de código y buenas prácticas

### **Características de la Interfaz**
- **Diseño Responsivo**: Adaptado para móviles y escritorio
- **Animaciones Fluidas**: Transiciones suaves con cubic-bezier
- **Gradientes Dinámicos**: Cada restaurante con su identidad visual
- **Microinteracciones**: Efectos hover y estados interactivos
- **Tema Personalizado**: Colores y componentes tematizados
- **Accesibilidad**: Componentes Material-UI optimizados

## Instalación y Ejecución

### **Prerrequisitos**
- Node.js 16+ instalado
- npm o yarn para gestión de paquetes

### **Pasos para ejecutar**

1. **Clonar el repositorio** (si aplica)
2. **Instalar dependencias**:
   ```bash
   cd frontend
   npm install
   ```

3. **Iniciar la aplicación**:
   ```bash
   npm start
   ```

4. **Abrir en navegador**: http://localhost:3000

### **Scripts Disponibles**
- `npm start` - Inicia servidor de desarrollo
- `npm run build` - Crea versión optimizada para producción
- `npm test` - Ejecuta pruebas unitarias
- `npm run lint` - Verifica calidad del código
- `npm run lint:fix` - Corrige problemas automáticamente

## Guía de Usuario

### **Seleccionar Restaurante**
1. Explora los 5 restaurantes disponibles
2. Haz click en el restaurante de tu preferencia
3. Observa el efecto de selección con gradientes

### **Ver Menú Completo**
1. Una vez seleccionado, el menú se genera automáticamente
2. Visualiza los 3 componentes: Plato Fuerte, Bebida, Postre
3. Cada item muestra descripción y método de servicio

### **Información Educativa**
1. Expande los acordeones para aprender sobre el patrón
2. Descubre los beneficios del Abstract Factory
3. Entiende la estructura y aplicación práctica

## Arquitectura del Patrón

### **Componentes Principales**
- **AbstractProduct**: Clases base (PlatoFuerte, Bebida, Postre)
- **ConcreteProduct**: Implementaciones específicas (Pizza, Ramen, Tacos, etc.)
- **AbstractFactory**: Interfaz para crear familias de productos
- **ConcreteFactory**: Implementaciones por cocina (FabricaRestauranteChino, etc.)
- **Client**: Componente React que utiliza las fábricas

### **Flujo de Datos**
1. **Usuario selecciona** tipo de restaurante
2. **Hook crea** fábrica correspondiente
3. **Fábrica genera** menú completo
4. **Componente renderiza** información del menú

## Beneficios del Patrón Implementado

### **Para el Desarrollador**
- **Código Limpio**: Separación clara de responsabilidades
- **Fácil Extensión**: Agregar nueva cocina sin modificar existente
- **Mantenimiento Simple**: Cambios localizados por cocina
- **Testing Unitario**: Fácil probar cada componente

### **Para el Usuario Final**
- **Experiencia Fluida**: Transiciones suaves y animaciones
- **Interfaz Intuitiva**: Cards visuales y claros
- **Información Completa**: Detalles de cada producto
- **Diseño Moderno**: Gradientes y efectos visuales atractivos

## Características Avanzadas

## Diseño Visual
- **Gradientes Personalizados**: Cada cocina con su paleta de colores
- **Animaciones CSS**: Fade-in, slide-up, efectos hover
- **Shadows y Depth**: Efectos 3D en cards y botones
- **Scrollbars Personalizadas**: Diseño coherente con el tema

## Interactividad
- **Estados de Selección**: Feedback visual inmediato
- **Loading States**: Indicadores de progreso
- **Error Handling**: Snackbars para notificaciones
- **Responsive Design**: Adaptación perfecta a cualquier pantalla

## Compatibilidad

### **Navegadores Soportados**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### **Dispositivos**
- Móviles: iOS y Android
- Tablets: iPad y Android tablets
- Escritorio: Windows, macOS, Linux

## Actualizaciones Futuras

### **Mejoras Planeadas**
- [ ] Sistema de calificación de restaurantes
- [ ] Modo oscuro/claro
- [ ] Animaciones más complejas
- [ ] Integración con API real
- [ ] Sistema de favoritos

## Licencia

MIT License - Libre para uso comercial y educativo

## Autores

Desarrollado como proyecto educativo para demostrar el patrón Abstract Factory con tecnologías web modernas.
