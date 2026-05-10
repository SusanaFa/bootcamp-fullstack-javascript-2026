//alumno.js
//ejercicio 5
function evaluarAlumno(nombre, nota) {
  if (nota >= 4) {
    return `${nombre} aprobó con nota ${nota}`;
  } else {
    return `${nombre} reprobó con nota ${nota}`;
  }
}

export default evaluarAlumno;
