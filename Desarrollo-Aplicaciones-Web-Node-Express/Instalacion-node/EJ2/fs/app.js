import fs from "node:fs";

const archivo = "mensaje.txt";
const contenido =
  "Hola, este archivo fue creado con file system, usando node.js";

fs.writeFileSync(archivo, contenido);
console.log("Archivo creado correctamente");

const lectura = fs.readFileSync(archivo, "utf-8");
console.log("Contenido del archivo");
console.log(lectura);
