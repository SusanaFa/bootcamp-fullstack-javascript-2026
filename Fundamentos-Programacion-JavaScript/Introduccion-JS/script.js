// ejercicio práctico 1
// document.writeln("Hola mundo");
// document.writeln("<h1>Hola mundo</h1>");

// ejercicio práctico 2
// alert("Hola");
// window.alert("Hola 2");
// window["alert"]("hola 3");

//declaración de variables y constantes. ejemplos de cuando usar la una o la otra
// let nombre = "Ana"; //aquí sí
// const nombre2 = "Ana"; // aquí no, ya que esta variable no es posible reasignarla

// const pi = 3.14;
//en el caso de los arreglos, objetos, funciones, fechas y otros, const protege la referencia, no el contenido.
// const arreglo = ["1", 2, "3"];
// const objetos = { nombre: "Susana", apellido: " Farías" };
// const fechas = new Date();
// const function1 = function () {};
// function1 = {}; // esto no es posible, porque function1 fue declarada como const. Las constantes no permiten reasignar un nuevo valor.
// const API_URL = "https://api.midominio.com"; //usamos const para configuraciones
// const boton = document.getElementById("btnEnviar"); //o para selectores del dom, los cuales no deberían cambiar.

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (const i = 0; i <= 10; i++) {  //esto arroja un error, pues i fue declarada como una constante y ya no puede ser reasignada
//   console.log(i);
// }

// console.log(nombre);
// console.log(nombre2);

// nombre = nombre + " Farías"; //esto es posible pues nombre es declarado como una variable
// nombre2 = nombre2 + " Español"; //esto nos arrojará un error, pues es una constante

// console.log(nombre);
// console.log(nombre2);

// declaramos variables con
// let nombre = "Ana";
// let edad = 28;
// let ciudad = "Temuco";

// // mostramos en la página
// document.writeln("<h1> Perfil de usuario </h1>");
// document.writeln("<p> Nombre: " + nombre + "</p>");
// document.writeln("<p> Edad: " + edad + "</p>");
// document.writeln("<p> Ciudad: " + ciudad + "</p>");

// ingremos edad por pantalla y hacemos una validación de tipo y validación de edad
let edad = prompt("favor ingrese su edad");

edad = Number(edad);

//validación básica.  esta validación falla si el valor es 0 o si no es un número
// if (!edad) {
//   alert("error");
// }

// validación adecuada. aquí validamos que realmente sea un número
if (isNaN(edad)) {
  alert("error, valor ingresado debe ser un número");
} else if (edad >= 18) {
  alert("Puedes ingresar al sitio");
} else {
  alert("No puedes ingresar al sitio");
}

// ingresamos un nombre por pantalla y generamos un mensaje
// let nombre = prompt("¿Cuál es tu nombre?");

// document.writeln("<h1>Bienvenido " + nombre + "</h1>");
// document.writeln("<p> Nos alegra que estes aprendiendo JavaScript </p>");

// alert("Hola, " + nombre + " disfruta el ejercicio");

// {} //llaves
// [] //corchetes
// <> //corchetes angulares
// () //parentesis

// "" //doble comilla
// '' //comilla simple
// `` //comillas invertidas o backticks

// ejemplo de uso de backticks  => ` Hola, cómo estas? ${nombre} `

// hacer una calculadora
