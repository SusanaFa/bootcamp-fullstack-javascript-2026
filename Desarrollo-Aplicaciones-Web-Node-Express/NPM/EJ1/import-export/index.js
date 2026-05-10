//index.js
import saludar from "./saludo.js"; //ejercicio 1
import { sumar, restar, multiplicar } from "./operaciones.js"; //ejercicio 2
import productos from "./productos.js"; //ejercicio 3
import evaluarAlumno from "./alumno.js"; //ejercicio 5
import chalk from "chalk"; //ejercicio 4 y 5

//ejercicio 1
const mensaje = saludar("Susana");
console.log(mensaje);

//ejercicio 2
const numero1 = 10;
const numero2 = 5;
console.log("Suma: ", sumar(numero1, numero2));
console.log("Resta: ", restar(numero1, numero2));
console.log("Multiplicación: ", multiplicar(numero1, numero2));

//ejercicio 3
productos.forEach((producto) => {
  console.log(`${producto.nombre} | $${producto.precio}`);
});

//ejercicio 4
console.log(chalk.green("Estamos probando chalk con Node"));
console.log(chalk.red("Este mensaje va parecer importante o urgente"));
console.log(chalk.blue("Este es un mensaje con un color mas amigable"));

//ejercicio 5
const nombre = "Camila";
const nota = 3.5;
const resultado = evaluarAlumno(nombre, nota);

if (nota >= 4) {
  console.log(chalk.green(resultado));
} else {
  console.log(chalk.red(resultado));
}
