// Clase que representa un menú completo
export class Menu {
  constructor(platoFuerte, bebida, postre) {
    this.platoFuerte = platoFuerte;
    this.bebida = bebida;
    this.postre = postre;
  }
  
  servirMenu() {
    console.log("=== MENÚ COMPLETO ===");
    console.log(`Plato fuerte: ${this.platoFuerte.getNombre()}`);
    this.platoFuerte.servir();
    
    console.log(`Bebida: ${this.bebida.getNombre()}`);
    this.bebida.servir();
    
    console.log(`Postre: ${this.postre.getNombre()}`);
    this.postre.servir();
    console.log("===================");
  }
  
  // Getters
  getPlatoFuerte() { 
    return this.platoFuerte; 
  }
  
  getBebida() { 
    return this.bebida; 
  }
  
  getPostre() { 
    return this.postre; 
  }
}
