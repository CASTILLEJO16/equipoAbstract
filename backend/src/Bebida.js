// Producto Abstracto - Bebida
export class Bebida {
  constructor(nombre, descripcion) {
    if (this.constructor === Bebida) {
      throw new Error("Bebida es una clase abstracta y no puede ser instanciada directamente");
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
