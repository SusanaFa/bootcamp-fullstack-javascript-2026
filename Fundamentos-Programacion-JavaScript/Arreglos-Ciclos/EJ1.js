// ejercicio práctico días de los meses
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
// posiciones [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 ]; -> index - i
// largo      [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 ]; -> length

const diasMeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let mesUsuario = Number(prompt("Ingrese un mes (1-12)"));

if (isNaN(mesUsuario) || mesUsuario < 1 || mesUsuario > 12) {
  alert("Mes inválido");
} else {
  for (let i = 0; i < meses.length; i++) {
    // comparación entre el indice y el mes ingresado por el usuario.
    // le restamos 1 porque los arreglos empiezan en 0
    if (i === mesUsuario - 1) {
      // mostramos el nombre del mes y sus días apuntando a los arreglos.
      alert(`${meses[i]} tiene ${diasMeses[i]} días`);
    }
  }
}
