// declaramos variables que guardan el estado actual de la calculadora
let primerNumero = "";
let operacion = "";
let esperandoSegundoNumero = false;

// display obtiene desde el DOM el elemento con id "display", donde se muestran los números y resultados
const display = document.getElementById("display");

// se ejecuta al presionar cualquier número del "0 al 9"
function presionarNumero(num) {
  // si esperandoSegundoNumero es verdadero
  if (esperandoSegundoNumero) {
    // si estábamos esperando el segundo número, el display reemplaza su contenido por el nuevo número ingresado
    display.textContent = num;
    // posterior a eso, pasamos el valor de esperandoSegundoNumero nuevamente a falso.
    esperandoSegundoNumero = false;
  } else {
    // si en cambio, esperandoSegundoNumero es falso
    // valido si es que el valor del display es igual a "0", de ser así
    if (display.textContent === "0") {
      // si el display muestra "0", lo reemplazamos por el número presionado
      display.textContent = num;
      // y si eso no se cumple
    } else {
      // concatenamos el nuevo dígito al texto actual del display para formar números de más de un dígito
      display.textContent = display.textContent + num;
    }
  }
}

// se ejecuta al presionar cualquiera de los operadores "+", "-", "*", "/"
function presionarOperador(op) {
  // al presionar un operador, la variable primerNumero toma el valor que contiene el display
  primerNumero = display.textContent;
  // la variable operacion toma el valor del operador seleccionado para la operación
  operacion = op;
  // el valor de la variable esperandoSegundoNumero pasa a verdadero.
  esperandoSegundoNumero = true;
}

// se ejecuta al presionar el boton "="
function calcular() {
  // si no hay operación definida o todavía estamos esperando el segundo número, no se realiza ningún cálculo
  if (operacion === "" || esperandoSegundoNumero) return;
  // a representa el primer número de la operación, guardado previamente en primerNumero
  const a = parseFloat(primerNumero);
  // b representa el segundo número, es decir, el valor actual mostrado en el display
  const b = parseFloat(display.textContent);

  let resultado;

  // dependiendo del operador, se realizará la operación correspondiente
  if (operacion === "+") resultado = a + b;
  if (operacion === "-") resultado = a - b;
  if (operacion === "*") resultado = a * b;

  if (operacion === "/") {
    if (b === 0) {
      resultado = "Error";
    } else {
      resultado = a / b;
    }
  }

  // convierto a String el resultado y lo muestro mediante el display en pantalla
  display.textContent = String(resultado);

  // reinicio las variables de estado para dejar la calculadora lista para una nueva operación
  primerNumero = "";
  operacion = "";
  esperandoSegundoNumero = false;
}

// se ejecuta al presionar el boton "C"
function limpia() {
  // reinicio las variables de estado para dejar la calculadora lista para una nueva operación
  primerNumero = "";
  operacion = "";
  esperandoSegundoNumero = false;
  display.textContent = "0";
}
