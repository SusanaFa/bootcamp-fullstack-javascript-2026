//models/index.js
import { Curso } from "./Curso.js";
import { Alumno } from "./Alumno.js";
import { Calificacion } from "./Calificacion.js";

// 1:n
//un curso tiene muchos alumnos
Curso.hasMany(Alumno, {
  foreignKey: "curso_id",
});

//un alumno pertenece a un curso
Alumno.belongTo(Curso, {
  foreignKey: "curso_id",
});

//un alumno tiene muchas calificaciones
Alumno.hasMany(Calificacion, {
  foreignKey: "alumno_id",
});

Calificacion.belongTo(Alumno, {
  foreignKey: "alumno_id",
});

export { Curso, Alumno, Calificacion };
