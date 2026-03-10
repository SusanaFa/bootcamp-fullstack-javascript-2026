//comentario de linea

/* comentario de bloque*/

// declaracion de variables

var nombre = "Juan";
let apellido = "Perez";
const edad = 30;
console.log(nombre); // Juan
// var nombre;

// ejemplo con var
if (true) {
  var nombre = "juanita";
  console.log("imprimiendo dentro del bloque ", nombre);
}

console.log("imprimiendo fuera del bloque ", nombre);

// ejemplo con let
if (true) {
  let apellido = "Gomez";
  console.log("imprimiendo dentro del bloque ", apellido);
}

console.log("imprimiendo fuera del bloque ", apellido);

// ejemplo de funciones

// funcion declarada
function saludar(nombre) {
  return "Hola " + nombre;
}

// funcion expresada
const saludar2 = function (nombre) {
  return "Hola " + nombre;
};

// funcion flecha
const saludar3 = (nombre) => {
  return "Hola " + nombre;
};

// funcion flecha con return implicito
const saludar4 = (nombre) => "Hola " + nombre;

// tipos de datos

let texto = "Hola mundo";
let numero = 36;
let booleano = true;

console.log(typeof texto);
console.log(typeof numero);
console.log(typeof booleano);

// operadores aritmeticos
let a = 10;
let b = 5;

// console.log("suma: ", a + b);
// console.log("resta: ", a - b);
// console.log("multiplicacion: ", a * b);
// console.log("division: ", a / b);
// console.log("modulo: ", a % b);

// concatenacion de cadenas
let saludo = "Hola";
let usuario = "Pedro";

a = "10";
console.log(saludo + " " + usuario); // Hola Pedro
console.log(saludo + " " + usuario + " " + a); // Hola Pedro
console.log(saludo + " " + usuario + " " + a + b); // Hola Pedro

//  10 == "10" // true - aquí se compara el valor sin importar el tipo
//  10 === "10" // false - aquí se compara el valor y el tipo

// condicional
let temperatura = 36;

if (temperatura > 45) {
  console.log("Hace calor");
} else {
  console.log("Hace frio");
}

//  funciones
function sumar(a, b) {
  return a + b;
}
console.log(sumar(10, 25));

function saludando(nombre) {
  console.log("Hola " + nombre);
}

saludando("Maria");

// funcion flecha
const multiplicar = (a, b) => a * b;
console.log(multiplicar(2, 3));

const saludos = (nombre) => "Hola " + nombre;
console.log(saludos("Carlos"));
