import { FabricaRestauranteChino } from './fabricas/FabricaRestauranteChino.js';
import { FabricaRestauranteJapones } from './fabricas/FabricaRestauranteJapones.js';
import { FabricaRestauranteMexicano } from './fabricas/FabricaRestauranteMexicano.js';
import { FabricaRestauranteItaliano } from './fabricas/FabricaRestauranteItaliano.js';
import { FabricaRestauranteIndio } from './fabricas/FabricaRestauranteIndio.js';
import readline from 'readline';

// Cliente - Programa principal
class Cliente {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  async iniciar() {
    console.log("SISTEMA DE RESTAURANTES - ABSTRACT FACTORY");
    console.log("================================================");
    console.log();

    // El cliente elige el restaurante
    const opcion = await this.pregunta("Seleccione el tipo de restaurante:\n1. Chino\n2. Japonés\n3. Mexicano\n4. Italiano\n5. Indio\nIngrese su opción (1-5): ");
    
    let fabrica = null;
    let nombreRestaurante = "";

    // Se crea la fábrica correspondiente según la elección
    switch (opcion) {
      case "1":
        fabrica = new FabricaRestauranteChino();
        nombreRestaurante = "RESTAURANTE CHINO SELECCIONADO";
        break;
      case "2":
        fabrica = new FabricaRestauranteJapones();
        nombreRestaurante = "RESTAURANTE JAPONÉS SELECCIONADO";
        break;
      case "3":
        fabrica = new FabricaRestauranteMexicano();
        nombreRestaurante = "RESTAURANTE MEXICANO SELECCIONADO";
        break;
      case "4":
        fabrica = new FabricaRestauranteItaliano();
        nombreRestaurante = "RESTAURANTE ITALIANO SELECCIONADO";
        break;
      case "5":
        fabrica = new FabricaRestauranteIndio();
        nombreRestaurante = "RESTAURANTE INDIO SELECCIONADO";
        break;
      default:
        console.log("Opción no válida. Saliendo del programa.");
        this.rl.close();
        return;
    }

    console.log(`\n${nombreRestaurante}`);

    // El cliente crea el menú usando la fábrica (sin saber qué cocina es)
    console.log("\nCREANDO MENÚ...");
    const menu = fabrica.crearMenu();

    // Se sirve el menú completo
    console.log("\nSIRVIENDO MENÚ COMPLETO:");
    menu.servirMenu();

    // Demostración de la flexibilidad del patrón
    console.log("\nBENEFICIO DEL PATRÓN:");
    console.log("El cliente trabajó con interfaces abstractas sin conocer");
    console.log("los detalles concretos de cada cocina.");
    console.log("Para agregar una nueva cocina, solo se necesita:");
    console.log("- Nuevos productos concretos");
    console.log("- Una nueva fábrica concreta");
    console.log("¡El código del cliente no cambia!");

    this.rl.close();
  }

  // Método para hacer preguntas de forma asíncrona
  pregunta(pregunta) {
    return new Promise((resolve) => {
      this.rl.question(pregunta, (respuesta) => {
        resolve(respuesta.trim());
      });
    });
  }

  // Método adicional para demostrar cómo cambiar de fábrica dinámicamente
  probarDiferentesFabricas() {
    console.log("\nDEMOSTRACIÓN DE MÚLTIPLES FÁBRICAS:");
    
    const fabricas = [
      new FabricaRestauranteChino(),
      new FabricaRestauranteJapones(),
      new FabricaRestauranteMexicano(),
      new FabricaRestauranteItaliano(),
      new FabricaRestauranteIndio()
    ];
    
    const nombres = ["CHINO", "JAPONÉS", "MEXICANO", "ITALIANO", "INDIO"];
    
    for (let i = 0; i < fabricas.length; i++) {
      console.log(`\n--- MENÚ ${nombres[i]} ---`);
      const menu = fabricas[i].crearMenu();
      menu.servirMenu();
    }
  }
}

// Iniciar el cliente
const cliente = new Cliente();
cliente.iniciar().catch(console.error);
