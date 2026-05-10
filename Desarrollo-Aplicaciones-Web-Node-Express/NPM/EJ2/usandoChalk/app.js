import chalk from "chalk";
import { crearMensajeProducto } from "./producto.js";

const nombreProducto = "Teclado ergonómico";
const precio = 120000;

const mensaje = crearMensajeProducto(nombreProducto, precio);

console.log(chalk.blue(" Registro del producto "));

console.log(chalk.green(mensaje));

console.log(
  chalk.yellow("Recuerda revisar si el precio ingresado es el correcto"),
);

console.log(chalk.magenta("Hemos finalizado el ejercicio práctico con Chalk"));
