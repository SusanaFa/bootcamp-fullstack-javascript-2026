//DOMContentLoaded : - Se ejecuta cuando el HTML está completamente cargado

document.addEventListener("DOMContentLoaded", () => {
  const mensajeCarga = document.querySelector("#mensajeCarga");
  mensajeCarga.textContent = "El DOM fue cargado correctamente!";

  const frutas = ["Manzana", "Pera", "Naranja", "Uva", "Platano"];

  const listaFrutas = document.querySelector("#listaFrutas");

  for (let i = 0; i < frutas.length; i++) {
    const li = document.createElement("li");
    li.textContent = frutas[i];
    listaFrutas.appendChild(li);
  }
});

// evento input - contador de caracteres
const comentario = document.querySelector("#comentario");

const contadorCaracteres = document.querySelector("#contadorCaracteres");

comentario.addEventListener("input", () => {
  contadorCaracteres.textContent = `Caracteres: ${comentario.value.length}`;
});

// evento input - nombre personalizado
const nombrePreview = document.querySelector("#nombrePreview");
const saludoPreview = document.querySelector("#saludoPreview");

nombrePreview.addEventListener("input", () => {
  //      hola
  const nombre = nombrePreview.value.trim();
  //hola

  if (nombre === "") {
    saludoPreview.textContent = `Hola, visitante`;
    return;
  }

  saludoPreview.textContent = `Hola, ${nombre}`;
});

// evento change - cambiar color con select
const selectorColor = document.querySelector("#selectorColor");
const cajaColor = document.querySelector("#cajaColor");

selectorColor.addEventListener("change", () => {
  const color = selectorColor.value;

  if (color === "") {
    cajaColor.style.backgroundColor = "gray";
    return;
  }

  cajaColor.style.backgroundColor = color;
});

//evento submit - validacion y procesado de un formulario
const formularioRegistro = document.querySelector("#formularioRegistro");
const nombreRegistro = document.querySelector("#nombreRegistro");
const correoRegistro = document.querySelector("#correoRegistro");

const respuestaFormulario = document.querySelector("#respuestaFormulario");

formularioRegistro.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = nombreRegistro.value.trim();
  const correo = correoRegistro.value.trim();

  if (nombre === "" || correo === "") {
    respuestaFormulario.textContent = "Todos los campos son obligatorios";
    respuestaFormulario.className = "error";
    return;
  }

  if (!correo.includes("@")) {
    respuestaFormulario.textContent = "El correo ingresado no es válido";
    respuestaFormulario.className = "error";
    return;
  }

  respuestaFormulario.textContent = `Formulario enviado por ${nombre}`;
  respuestaFormulario.className = "ok";

  formularioRegistro.reset();
});

// evento keydown - agregar tarea al presionar enter
const entradaTareaEnter = document.querySelector("#entradaTareaEnter");
const listaTareasEnter = document.querySelector("#listaTareasEnter");

// Escuchamos cada vez que el usuario presiona una tecla
entradaTareaEnter.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();

    const texto = entradaTareaEnter.value.trim();

    if (texto === "") {
      return;
    }

    const li = document.createElement("li");
    li.textContent = texto;
    listaTareasEnter.appendChild(li);
    entradaTareaEnter.value = "";
  }
});
