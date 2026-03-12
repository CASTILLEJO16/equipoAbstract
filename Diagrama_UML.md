# Diagrama UML - Patrón Abstract Factory para Restaurantes

## Estructura del Patrón

```mermaid
classDiagram
    %% Productos Abstractos
    class PlatoFuerte {
        <<abstract>>
        -String nombre
        -String descripcion
        +PlatoFuerte(nombre, descripcion)
        +servir()*
        +getNombre() String
        +getDescripcion() String
    }
    
    class Bebida {
        <<abstract>>
        -String nombre
        -String descripcion
        +Bebida(nombre, descripcion)
        +servir()*
        +getNombre() String
        +getDescripcion() String
    }
    
    class Postre {
        <<abstract>>
        -String nombre
        -String descripcion
        +Postre(nombre, descripcion)
        +servir()*
        +getNombre() String
        +getDescripcion() String
    }
    
    %% Fábrica Abstracta
    class FabricaRestaurante {
        <<abstract>>
        +crearPlatoFuerte() PlatoFuerte*
        +crearBebida() Bebida*
        +crearPostre() Postre*
        +crearMenu() Menu
    }
    
    %% Productos Concretos - Cocina China
    class ChowMein {
        +ChowMein()
        +servir()
    }
    
    class TeJazmin {
        +TeJazmin()
        +servir()
    }
    
    class RollitoDulce {
        +RollitoDulce()
        +servir()
    }
    
    %% Productos Concretos - Cocina Japonesa
    class Ramen {
        +Ramen()
        +servir()
    }
    
    class Sake {
        +Sake()
        +servir()
    }
    
    class Dango {
        +Dango()
        +servir()
    }
    
    %% Productos Concretos - Cocina Mexicana
    class TacosCarneAsada {
        +TacosCarneAsada()
        +servir()
    }
    
    class AguaJamaica {
        +AguaJamaica()
        +servir()
    }
    
    class PastelTresLeches {
        +PastelTresLeches()
        +servir()
    }
    
    %% Fábricas Concretas
    class FabricaRestauranteChino {
        +crearPlatoFuerte() PlatoFuerte
        +crearBebida() Bebida
        +crearPostre() Postre
    }
    
    class FabricaRestauranteJapones {
        +crearPlatoFuerte() PlatoFuerte
        +crearBebida() Bebida
        +crearPostre() Postre
    }
    
    class FabricaRestauranteMexicano {
        +crearPlatoFuerte() PlatoFuerte
        +crearBebida() Bebida
        +crearPostre() Postre
    }
    
    %% Clases de Soporte
    class Menu {
        -PlatoFuerte platoFuerte
        -Bebida bebida
        -Postre postre
        +Menu(plato, bebida, postre)
        +servirMenu()
        +getPlatoFuerte() PlatoFuerte
        +getBebida() Bebida
        +getPostre() Postre
    }
    
    class Cliente {
        +main(String[] args)
        +probarDiferentesFabricas()
    }
    
    %% Herencia de Productos
    ChowMein --|> PlatoFuerte
    Ramen --|> PlatoFuerte
    TacosCarneAsada --|> PlatoFuerte
    
    TeJazmin --|> Bebida
    Sake --|> Bebida
    AguaJamaica --|> Bebida
    
    RollitoDulce --|> Postre
    Dango --|> Postre
    PastelTresLeches --|> Postre
    
    %% Herencia de Fábricas
    FabricaRestauranteChino --|> FabricaRestaurante
    FabricaRestauranteJapones --|> FabricaRestaurante
    FabricaRestauranteMexicano --|> FabricaRestaurante
    
    %% Dependencias
    FabricaRestaurante ..> PlatoFuerte : crea
    FabricaRestaurante ..> Bebida : crea
    FabricaRestaurante ..> Postre : crea
    FabricaRestaurante ..> Menu : utiliza
    
    Cliente ..> FabricaRestaurante : depende
    Cliente ..> Menu : utiliza
    
    %% Relaciones de Creación
    FabricaRestauranteChino --> ChowMein : crea
    FabricaRestauranteChino --> TeJazmin : crea
    FabricaRestauranteChino --> RollitoDulce : crea
    
    FabricaRestauranteJapones --> Ramen : crea
    FabricaRestauranteJapones --> Sake : crea
    FabricaRestauranteJapones --> Dango : crea
    
    FabricaRestauranteMexicano --> TacosCarneAsada : crea
    FabricaRestauranteMexicano --> AguaJamaica : crea
    FabricaRestauranteMexicano --> PastelTresLeches : crea
    
    %% Composición del Menu
    Menu *-- PlatoFuerte : contiene
    Menu *-- Bebida : contiene
    Menu *-- Postre : contiene
```

## Explicación del Diagrama

### Componentes del Patrón

1. **Productos Abstractos** (`PlatoFuerte`, `Bebida`, `Postre`)
   - Definen la interfaz común para todos los productos de cada tipo
   - No contienen implementación específica

2. **Productos Concretos**
   - Implementaciones específicas para cada cocina
   - Ej: `ChowMein`, `Ramen`, `TacosCarneAsada` heredan de `PlatoFuerte`

3. **Fábrica Abstracta** (`FabricaRestaurante`)
   - Define métodos para crear cada tipo de producto
   - No especifica qué productos concretos crear

4. **Fábricas Concretas**
   - Implementan los métodos de la fábrica abstracta
   - Cada fábrica crea productos de una sola cocina
   - Ej: `FabricaRestauranteChino` solo crea productos chinos

5. **Cliente** (`Cliente`)
   - Trabaja con interfaces abstractas
   - No conoce los detalles de las implementaciones concretas

### Flujo del Patrón

1. El cliente solicita una fábrica específica
2. La fábrica crea productos compatibles entre sí
3. El cliente recibe y utiliza los productos sin conocer su tipo concreto

### Ventajas del Diseño

- **Encapsulación**: El cliente no necesita conocer las clases concretas
- **Consistencia**: Los productos creados por una fábrica son compatibles
- **Extensibilidad**: Fácil agregar nuevas cocinas sin modificar el cliente
- **Desacoplamiento**: Reducción de dependencias entre componentes
