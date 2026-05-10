//server.js

import express from "express";
const app = express();
const PORT = 3000;

const nombre = "Susana";
const curso = "Desarrollo Fullstack JavaScript";
const modulos = ["Frontend", "JavaScript", "Base de datos", "Node y Express"];

//ruta raiz
app.get("/", (req, res) => {
  res.send("Hola mundo desde Express");
});

//ruta de saludo
app.get("/saludo", (req, res) => {
  res.send(
    `Bienvenido a mi servidor creado con Express. Mi nombre es ${nombre}`,
  );
});

//ruta responde con nombre de curso
app.get("/curso", (req, res) => {
  res.send(`Actualmente estamos trabajando en el curso de ${curso}`);
});

//ruta responde con modulos del curso
app.get("/modulos", (req, res) => {
  res.send(`Los módulos del curso son: ${modulos.join(",")}`);
});

//ruta de contacto
app.get("/contacto", (req, res) => {
  res.send("Puedes contactarnos en susana.farias.ve@gmail.com");
});

//puerto de escucha servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
