# 🍽️ Restaurantes - Abstract Factory Pattern (React)

## Descripción

Aplicación web moderna construida con **React 18** que implementa el patrón de diseño **Abstract Factory** para simular un sistema de restaurantes con diferentes tipos de cocina.

## 🎯 Objetivo del Patrón

El patrón Abstract Factory permite crear familias de objetos relacionados (platos, bebidas, postres) sin especificar sus clases concretas. Esto proporciona:

- **Desacoplamiento**: El cliente no depende de clases concretas
- **Consistencia**: Los productos creados son compatibles entre sí
- **Extensibilidad**: Fácil agregar nuevas cocinas sin modificar el código existente

## 🍜 Tipos de Cocina

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

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework frontend moderno con Hooks
- **Material-UI (MUI) v5** - Biblioteca de componentes UI
- **JavaScript ES6+** - Implementación del patrón
- **CSS-in-JS** - Estilizado con Material-UI y Emotion
- **React Hooks** - Estado y efectos personalizados
- **ESLint** - Calidad de código

## 🏗️ Arquitectura del Proyecto

### Componentes React
```
src/
├── components/
│   ├── Header.js           # Header con chips informativos
│   ├── RestaurantCard.js   # Tarjeta de selección de restaurante
│   ├── MenuCard.js         # Tarjeta de menú individual
│   └── PatternInfo.js      # Información educativa del patrón
├── hooks/
│   └── useRestaurantFactory.js # Hook personalizado para la fábrica
├── styles/
│   ├── theme.js            # Tema personalizado Material-UI
│   └── GlobalStyles.js     # Estilos globales y animaciones
├── App.js                  # Componente principal
├── index.js                # Punto de entrada
└── RestaurantFactory.js    # Implementación del patrón
```

### Características de la Arquitectura

- **Componentes Funcionales**: Todos los componentes usan React Hooks
- **Custom Hooks**: Lógica de negocio separada en `useRestaurantFactory`
- **Estilos Centralizados**: Tema y estilos globales configurados
- **Animaciones**: Transiciones suaves con Fade y animaciones CSS
- **Manejo de Estados**: Estados de loading, error y selección
- **Responsive Design**: Adaptado para móviles y escritorio

## 🚀 Cómo Ejecutar

1. **Instalar dependencias**:
```bash
npm install
```

2. **Iniciar aplicación**:
```bash
npm start
```

3. **Abrir en navegador**: http://localhost:3000

4. **Scripts adicionales**:
```bash
npm run build      # Build para producción
npm test          # Ejecutar tests
npm run lint      # Verificar calidad de código
npm run lint:fix  # Corregir problemas de linting
```

## 🎨 Características de la Interfaz

### Diseño Moderno
- **Material Design**: Interfaz moderna y atractiva
- **Gradientes**: Fondo con gradientes sutiles
- **Animaciones**: Transiciones suaves y efectos hover
- **Loading States**: Indicadores de carga con CircularProgress
- **Error Handling**: Snackbars para errores

### Interactividad
- **Selección Visual**: Cards con estado seleccionado
- **Animaciones de Entrada**: Fade animations para transiciones
- **Feedback Inmediato**: Respuesta visual a acciones del usuario
- **Información Expandida**: Accordions con detalles del patrón

### Experiencia de Usuario
- **Intuitiva**: Navegación clara y sencilla
- **Responsiva**: Funciona perfectamente en móviles
- **Accesible**: Componentes accesibles de Material-UI
- **Educativa**: Información integrada sobre el patrón

## 🔄 Flujo de la Aplicación

1. **Selección**: Usuario elige tipo de restaurante con cards interactivas
2. **Loading**: Estado de carga mientras se crea el menú
3. **Presentación**: Menú mostrado con animaciones secuenciales
4. **Educación**: Información del patrón con accordions expandibles
5. **Navegación**: Botón para cambiar de restaurante

## � Implementación del Patrón

### Hook Personalizado
```javascript
const useRestaurantFactory = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Lógica de selección y creación de menú
  // Manejo de estados y errores
};
```

### Componentes Reutilizables
- **RestaurantCard**: Reutilizable para cualquier restaurante
- **MenuCard**: Genérico para cualquier tipo de platillo
- **PatternInfo**: Componente educativo expandible

## 🎯 Beneficios Demostrados

- ✅ **Component-Based**: Arquitectura modular y reutilizable
- ✅ **State Management**: Estados bien gestionados con hooks
- ✅ **User Experience**: Interfaz moderna y responsiva
- ✅ **Code Quality**: ESLint y buenas prácticas
- ✅ **Performance**: Optimized re-renders con React
- ✅ **Maintainability**: Código organizado y escalable

## 🔮 Extensiones Posibles

- **TypeScript**: Migrar a TypeScript para mayor seguridad
- **Redux/Zustand**: Manejo de estado global
- **Testing**: Unit tests con Jest y React Testing Library
- **PWA**: Convertir a Progressive Web App
- **Backend Real**: Conectar con API REST
- **Animations**: Framer Motion para animaciones más complejas
- **Routing**: React Router para múltiples páginas
- **Internationalization**: Soporte para múltiples idiomas

## 📚 Conceptos React Aplicados

- **Hooks**: useState, useCallback, useEffect
- **Custom Hooks**: Lógica reutilizable
- **Component Composition**: Componentes reutilizables
- **Conditional Rendering**: Renderizado basado en estado
- **Error Boundaries**: Manejo de errores
- **Performance**: Optimización de renderizado

---

**Esta aplicación React demuestra las mejores prácticas modernas de desarrollo frontend mientras implementa educativamente el patrón Abstract Factory con una experiencia de usuario excepcional.**
