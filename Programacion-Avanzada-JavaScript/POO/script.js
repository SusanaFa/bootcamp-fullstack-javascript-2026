class Alumno {
  // constructor: se ejecuta al crear una nueva instancia
  // y permite asignar valores iniciales a sus propiedades
  constructor(nombre, curso) {
    this.nombre = nombre;
    this.curso = curso;
  }
  // método de la clase: define un comportamiento del objeto
  estudia() {
    return `${this.nombre} estudia ${this.curso}`;
  }
}

const alumno1 = new Alumno("José", "Full stack JS");
const alumno2 = new Alumno("Lorna", "Full stack JS");
const alumno3 = new Alumno("Maricel", "Full stack JS");

// la clase es el molde o la receta
// la instancia es el objeto concreto creado a partir de esa clase

class Producto {
  // las propiedades guardan el estado del objeto
  // los métodos representan acciones o comportamientos
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
  muestraInfo() {
    return `El producto ${this.nombre}, posee ${this.stock} unidades, a un valor de ${this.precio} CLP`;
  }
}

const producto1 = new Producto("Manjar", 5000, 400);

console.log(producto1.muestraInfo());
