//app.js
console.log("Hola desde Node");
console.log("Estamos ejecutando JavaScript fuera del navegador");

const nombre = "Susanita tiene un ratón";

function saludar(usuario) {
  return `Hola, ${usuario}. Bienvenido a Node`;
}

console.log(saludar(nombre));
