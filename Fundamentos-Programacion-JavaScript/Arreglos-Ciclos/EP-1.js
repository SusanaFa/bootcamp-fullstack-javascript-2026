// ejercicio práctico promedio notas

const notas = [];

for (let i = 0; i < 3; i++) {
  let nota = prompt("Ingrese la nota " + (i + 1));

  if (nota === null || nota.trim() === "") {
    alert("Debe ingresar un valor válido");
    i--; // retrocede para repetir la iteración
    continue;
  }

  nota = Number(nota);

  if (isNaN(nota)) {
    alert("Debe ingresar un número válido");
    i--;
    continue;
  }

  if (nota < 1 || nota > 7) {
    alert("La nota debe estar entre 1 y 7");
    i--;
    continue;
  }

  notas.push(nota);
}

// ponderaciones
const ponderaciones = [0.25, 0.35, 0.4];

let suma = 0;

for (let i = 0; i < notas.length; i++) {
  suma += notas[i] * ponderaciones[i];
}

// resultado final
alert("El promedio es: " + suma.toFixed(2));
