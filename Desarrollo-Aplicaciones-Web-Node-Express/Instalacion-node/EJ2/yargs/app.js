import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv))
  .option("nombre", {
    alias: "n",
    describe: "Nombre de la persona",
    type: "string",
    default: "Estudiante",
  })
  .option("curso", {
    alias: "c",
    describe: "Nombre del curso",
    type: "string",
    default: "Node.js",
  })

  .help().argv;

console.log("Datos recibidos:\n");
console.log(`Nombre: ${argv.nombre}`);
console.log(`Curso: ${argv.curso}`);
console.log(
  `Mensaje: Hola ${argv.nombre}, bienvenido/a al curso de ${argv.curso}`,
);

//cómo probar?

//node app.js --nombre=Susana --curso=JS avanzado
//node app.js --n=susana --c=JS avanzado
//node app.js
