// EJERCICIOS BÁSICOS DE DOM
// Aquí utilizamos javascript para manipular el DOM

// ejercicio 1 - cambiar el contenido de un elemento. en este caso, el titulo
// utilizamos getElementById para seleccionar el elemento del DOM por su id. con getElementById solo podemos seleccionar por id, no por clase o etiqueta
const titulo = document.getElementById("titulo");
const btn = document.getElementById("btnCambiar");

btn.addEventListener("click", () => {
  titulo.textContent = "Texto cambiado";
});

// ejercicio 2 - mostrar el valor de un input al hacer click en un botón
const input = document.getElementById("entradaTexto");
const btn2 = document.getElementById("btnMostrar");
const resultado = document.getElementById("resultado");

btn2.addEventListener("click", () => {
  console.log("event click");

  const valorInput = input.value.trim();

  if (valorInput === "") {
    resultado.textContent = "Por favor, ingresa un valor";
    return;
  }

  resultado.textContent = valorInput;
});

// ejercicio 3 - cambiar el color de fondo de un elemento al hacer click en un botón
// utilizamos querySelector para seleccionar elementos del DOM. con querySelector podemos seleccionar por id, clase o etiqueta

// id = #
// class = .
// tag = tagname
const btn3 = document.querySelector("#btnCambiaColor");
const caja = document.querySelector("#caja");

btn3.addEventListener("click", () => {
  console.log("event clic btn3");
  caja.style.backgroundColor = "tomato";
});

// ejercicio 4 - convertir una temperatura de celcius a farenheit al hacer click en un botón

const btn4 = document.querySelector("#cambiaTemperatura");
const inputTemp = document.querySelector("#CelciusAFarenheit");
const resultadoTemp = document.querySelector("#resultadoTemperatura");

// formula para convertir de celcius a farenheit
// (0 °C × 9/5) + 32 = 32 °F

btn4.addEventListener("click", () => {
  const valorTemp = inputTemp.value.trim();

  if (valorTemp === "") {
    resultadoTemp.textContent = "Por favor, ingresa una temperatura";
    return;
  }

  const temperaturaCelcius = Number(valorTemp);
  const temperaturaFarenheit = (temperaturaCelcius * 9) / 5 + 32;

  resultadoTemp.textContent = `${temperaturaCelcius} °C son ${temperaturaFarenheit} °F`;
});
