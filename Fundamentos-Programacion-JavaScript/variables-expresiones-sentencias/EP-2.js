// ejercicio práctico 2 - L2-M3

let num1 = parseFloat(prompt("Ingresa la nota 1"));
let num2 = parseFloat(prompt("Ingresa la nota 2"));
let num3 = parseFloat(prompt("Ingresa la nota 3"));

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  alert("Debes ingresar una nota válida");
} else {
  let promedio = (num1 + num2 + num3) / 3;

  if (promedio >= 6) {
    console.log("Excelente! Tienes promedio ", promedio);
    document.writeln("Excelente! Tienes promedio ", promedio);
  } else if (promedio >= 5) {
    console.log(" Tienes promedio ", promedio, "sigue adelante!");
    document.writeln(" Tienes promedio ", promedio, "sigue adelante!");
  } else if (promedio >= 4) {
    console.log("tienes promedio ", promedio, " puedes mejorar");
    document.writeln("tienes promedio ", promedio, " puedes mejorar");
  } else {
    console.log("Estas reprobado");
    document.writeln("Estas reprobado");
  }
}

// conectar a un index.html para poder ejecutar
