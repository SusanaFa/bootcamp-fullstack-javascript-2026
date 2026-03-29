// ejercicio práctico 2 L5
const pacientes = [];

// este objeto tendrá como propiedades a nombre, edad, peso y sexo {}

let cantidad = parseInt(prompt("Cuantos pacientes desea ingresar hoy?"));

if (!isNaN) {
  alert("debe ingresar un valor numérico");
}

for (let i = 0; i < cantidad; i++) {
  let nombre = prompt("ingrese el nombre del paciente");
  let edad = prompt("ingrese la edad del paciente");
  let sexo = prompt("ingrese el sexo del paciente ");
  let peso = parseInt(prompt("ingrese el peso del paciente"));

  let paciente = {
    nombre: nombre,
    edad: edad,
    sexo: sexo,

    peso: peso,
  };

  pacientes.push(paciente);
}

let promedio = 0;

for (let i = 0; i < pacientes.length; i++) {
  console.log(pacientes[i]);
  promedio += pacientes[i].peso;
}

promedio = promedio / pacientes.length;

console.log(`el promedio del peso de ls pacientes es ${promedio}`);
