// Producto Abstracto - Postre
export class Postre {
  constructor(nombre, descripcion) {
    if (this.constructor === Postre) {
      throw new Error("Postre es una clase abstracta y no puede ser instanciada directamente");
    }
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
  
  servir() {
    throw new Error("El método servir() debe ser implementado por la subclase");
  }
  
  getNombre() {
    return this.nombre;
  }
  
  getDescripcion() {
    return this.descripcion;
  }
}
