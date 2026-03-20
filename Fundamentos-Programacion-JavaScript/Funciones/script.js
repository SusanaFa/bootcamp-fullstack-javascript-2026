// Funciones

// la función es como una máquina dentro de nuestro código
// le podemos pasar datos (entrada), hace algo con ellos, y luego nos devuelve un resultado (salida)

// parametros
// las o la variable que definimos en la función

// argumentos
// es el valor que le pasamos cuando la llamamos

// declaración de las funciones
function nombreFuncion(parametro_1, parametro_n) {
  // bloque de código que se va ejecutar cuando la invoquemos
  // let resultado = parametro_1 * parametro_n
  // return resultado;
}

function suma(a, b = 3) {
  return a + b;
}

function suma(a, b = 3) {
  let suma = a + b;
  return suma;
}

let resultado = suma(2, 4);
console.log(resultado);

let resultado2 = suma(2, 6);
console.log(resultado2);

// funciones declarativas
// funciones expresadas
// funciones flecha

function saludar() {
  console.log("Hola");
}

saludar();

// funciones que Devuelven algo o entregan un resultado (return)
// funciones que hacen algo o ejecutan una accion

// funcion que aplica estilos
function cambiarColorFondo() {
  document.body.style.background = "red";
  console.log("Hola fulanito");
}

// funciones declarativas
function saludar(nombre) {}

// funcion expresada
const saludar = function (nombre) {};

//funcion flecha
const saludar = (nombre) => {};

// 1- declarando funciones de saludo personalizado
// Declarativa
function saludarDeclarativa(nombre) {
  return "Hola " + nombre;
}

// Expresada
const saludarExpresada = function (nombre) {
  return "Hola " + nombre;
};

// Flecha
const saludarFlecha = (nombre) => {
  return "Hola " + nombre;
};

// probando
console.log(saludarDeclarativa("Arelis"));
console.log(saludarExpresada("José"));
console.log(saludarFlecha("Lorna"));

//2- declarando funciones que suman dos números
// Declarativa
function sumarDeclarativa(a, b) {
  return a + b;
}

// Expresada
const sumarExpresada = function (a, b) {
  return a + b;
};

// Flecha
const sumarFlecha = (a, b) => {
  return a + b;
};

// probando
console.log(sumarDeclarativa(1, 2));
console.log(sumarExpresada(2, 4));
console.log(sumarFlecha(4, 7));

//3- Declarando funciones que muestran mensaje, funciones sin retorno
// Declarativa
function mostrarMensajeDeclarativa() {
  console.log("Bienvenidos");
}

// Expresada
const mostrarMensajeExpresada = function () {
  console.log("Bienvenidos");
};

// Flecha
const mostrarMensajeFlecha = () => {
  console.log("Bienvenidos");
};

// probando
mostrarMensajeDeclarativa();
mostrarMensajeExpresada();
mostrarMensajeFlecha();

// 4- declarando funciones que calculan si numero es par o impar
// Declarativa
function esParDeclarativa(numero) {
  if (numero % 2 === 0) {
    return "Es par";
  } else {
    return "Es impar";
  }
}
// recordar lo siguiente
// = asignacion
// == igualdad
// === igualdad estricta
// "0" != 0

console.log(esParDeclarativa(3));
console.log(esParDeclarativa(8));
