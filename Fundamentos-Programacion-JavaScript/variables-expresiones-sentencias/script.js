// declaración de variables
//aquí creamos variables para almacenar valores o información básica
//variables tipo var, let, const

let nombre = "Juan";
let edad = 30;
let esEstudiante = true;

console.log("Nombre: ", nombre);
console.log("Edad: " + edad);
console.log("Es estudiante: ", esEstudiante);

console.log(typeof nombre);

console.log(typeof esEstudiante);

esEstudiante = "Hola";
console.log(typeof esEstudiante);

edad = "30";

// ==
//===

//operadores aritméticos
//los operadores aritméticos nos permiten realizar cálculos matemáticos básicos
// + , - , / , * , %
let suma = 10 + 5;
console.log("Suma: ", suma);

let resta = 10 - 5;
console.log("Resta: ", resta);

let multiplicacion = 10 * 5;
console.log("Multiplicación: ", multiplicacion);

let division = 10 / 5;
console.log("División: ", division);

let resto = 10 % 3;
console.log("Resto o módulo: ", resto);

// operadores de asignación
let numero = 10;

numero += 5; // numero = numero + 5
console.log("numero +=5 : ", numero);

numero -= 3; // numero = numero - 3
console.log("numero -=3 : ", numero);

numero *= 2; // numero = numero * 2
console.log("numero *=2 :", numero);

numero /= 4;
console.log("numero /=4 : ", numero);

// operadores de comparación
let a = 5;
let b = "5";

console.log("a == b: ", a == b); //true -- esta es una comparación de valores
console.log("a === b: ", a === b); // false -- estoy comparando valor y tipo de dato
console.log(typeof a);
console.log(typeof b);

console.log("a != b: ", a != b); // false -- aca comparamos solo valores -- != : distinto
console.log("a !== b: ", a !== b); // true -- aca comparamos valores y tipo de datos -- es que no son igual !== : estrictamente distinto

console.log("a > 3: ", a > 3);
console.log("a < 3: ", a < 3);
console.log("a >= 5: ", a >= 5);
console.log("a <= 4: ", a <= 4);

//booleanos
//verdadero = true --  falso = false
let verdadero = true;
let falso = false;

console.log("Valor verdadero: ", verdadero);
console.log("Valor falso: ", falso);

// conversion a booleanos
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("hola"));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN)); //Not a Number

console.log(Boolean([]));
console.log(Boolean({}));

// operadores lógicos
// AND (&&) -- OR (||) -- NOT (!)

// AND (&&) Devuelve true SOLO SI AMBOS operandos son true
console.log("true && true: ", true && true);
console.log("true && false: ", true && false);
console.log("false && true: ", false && true);
console.log("false && false: ", false && false);

// OR (||) Devuelve true si al menos uno de los operandos es true
console.log("true || false: ", true || false);
console.log("false || true: ", false || true);

// NOT (!) - Invierte el Booleano
console.log("!true: ", !true);
console.log("!false: ", !false);

// condicionales
// if - else if - else

// if(expresion){
//  código a ejecutar
// }else if(expresion){
//  código a ejecutar
// }else{
// otro código a ejecutar
// }

let nota = 3;

if (nota >= 6) {
  console.log("Excelente, lo hiciste muy bien");
} else if (nota >= 4) {
  console.log("Estás aprobado");
} else {
  console.log("Lo lamento, estas reprobado");
}

// condicionales anidadas
let numeroUsarios = 40;

if (numeroUsarios >= 0) {
  console.log("Número de usuarios creciendo");

  if (numeroUsarios < 50) {
    console.log("Estás en la primera mitad");

    if (numeroUsarios < 25) {
      console.log("Numero de usuarios menor a 25");
    } else {
      console.log("Mayor o igual a 25");
    }
  } else {
    console.log("Estás en la segunda mitad");
  }
} else {
  console.log("Número negativo, no tienes usuarios");
}
