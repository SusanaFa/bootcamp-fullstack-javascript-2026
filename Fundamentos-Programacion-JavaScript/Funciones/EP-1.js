// funcion adivinar el número
// base version colaborativa clase
let numeroRandom = Math.floor(Math.random() * 10) + 1;
const numerosUsados = [];
let intentos = 3;
console.log(numeroRandom);

for (let i = 0; i < intentos; i++) {
  let numero = parseInt(prompt("ingresa un numero"));

  if (numero > 10 || numero < 1 || isNaN(numero)) {
    alert("Valor no corresponde, intenta nuevamente");
    i--;
  } else {
    if (numero === numeroRandom) {
      alert("Adivinaste");
      break;
    } else {
      numerosUsados.push(numero);
    }
  }
}

for (let i = 0; i < numerosUsados.length; i++) {
  if (numero === numerosUsados[i]) {
    alert("Bro, ese número ya lo ingresaste");
  }
}

// refactor 1
function jugar() {
  let numeroRandom = generarNumero();
  let intentos = 3;
  let numerosUsados = [];

  while (intentos > 0) {
    let numero = pedirNumero();

    if (!validarNumero(numero)) {
      alert("Número inválido");
      continue;
    }

    if (numeroRepetido(numero, numerosUsados)) {
      alert("Ese número ya lo ingresaste");
      continue;
    }

    numerosUsados.push(numero);

    if (numero === numeroRandom) {
      alert("¡Adivinaste!");
      return;
    }

    intentos--;
    alert("Te quedan " + intentos + " intentos");
  }

  alert("Perdiste. El número era " + numeroRandom);
}

function generarNumero() {
  return Math.floor(Math.random() * 10) + 1;
}

function pedirNumero() {
  return parseInt(prompt("Ingresa un número entre 1 y 10"));
}

function validarNumero(numero) {
  return numero >= 1 && numero <= 10 && !isNaN(numero);
}

function numeroRepetido(numero, lista) {
  return lista.includes(numero);
}

// refactor 2
function jugar() {
  let numeroRandom = generarNumero();
  let numerosUsados = [];
  let intentos = 3;

  for (let i = 0; i < intentos; i++) {
    let numero = pedirNumero();

    if (!validarNumero(numero)) {
      alert("Número inválido");
      i--;
      continue;
    }

    if (numeroRepetido(numero, numerosUsados)) {
      alert("Número repetido");
      i--;
      continue;
    }

    numerosUsados.push(numero);

    if (numero === numeroRandom) {
      alert("Adivinaste");
      break;
    }
  }
}

// refactor 3
function jugar() {
  let numeroRandom = Math.floor(Math.random() * 10) + 1;
  let intentos = 3;
  let usados = [];

  function pedirNumero() {
    return parseInt(prompt("Ingresa un número"));
  }

  function validar(numero) {
    return numero >= 1 && numero <= 10 && !isNaN(numero);
  }

  function repetido(numero) {
    return usados.includes(numero);
  }

  while (intentos > 0) {
    let numero = pedirNumero();

    if (!validar(numero)) {
      alert("Número inválido");
      continue;
    }

    if (repetido(numero)) {
      alert("Número repetido");
      continue;
    }

    usados.push(numero);

    if (numero === numeroRandom) {
      alert("Ganaste");
      return;
    }

    intentos--;
  }

  alert("Perdiste");
}
