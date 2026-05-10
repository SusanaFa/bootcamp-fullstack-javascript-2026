import express from "express";
import { engine } from "express-handlebars";

const app = express();
const PORT = 3000;

//servir los archivos estátios
app.use(express.static("public"));

//configuración handlebars como motor de plantillas
app.engine(
  "handlebars",
  engine({
    layoutsDir: "./views/layouts",
    partialsDir: "./views/partials",
    defaultLayout: "main",
  }),
);

//indicamos a express que usaremos handlebars como motor de vistas
app.set("view engine", "handlebars");
//indicamos la carpeta principal donde estarán las vistas
app.set("views", "./views");

//ruta principal
app.get("/", (req, res) => {
  //ejercicio 1
  //   res.render("home", {
  //     titulo: "Mi primera vista con Handlebars",
  //     nombre: "Susana",
  //     curso: "Full Stack JavaScript",
  //     anio: "2026",
  //   });

  const persona = {
    nombre: "Susana",
    profesion: "Desarrolladora Full Stack JavaScript - Java",
    ciudad: "Angol",
    descripcion:
      "Me gusta enseñar, dar clases, y ser amigable con mis estudiantes",
    disponible: true,
  };

  res.render("home", {
    titulo: "Mi presentación personal",
    persona,
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
