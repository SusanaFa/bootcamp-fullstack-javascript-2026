import express from "express";
import { engine } from "express-handlebars";

const app = express();
const PORT = 3000;

app.engine(
  "handlebars",
  engine({
    layoutsDir: "./views/layouts",
    partialsDir: "./views/partials",
    defaultLayout: "main",
  }),
);

app.set("view engine", "handlebars");

app.set("views", "./views");

//ruta raiz
app.get("/", (req, res) => {
  //res.send -> envia una respuesta directa
  //res.render -> renderiza una vista

  res.render("home", {
    titulo: "inicio",
    mensaje: "Bienvenido a mi sitio con Handlebars",
    descripcion:
      "En este ejercicio estamos practicando rutas, vistas, layouts y partials",
  });
});

//ruta de acerca de
app.get("/about", (req, res) => {
  res.render("about", {
    titulo: "Sobre Nosotros",
    nombreEmpresa: "Tag Abierto - Parenthesis",
    descripcion:
      "Somos una empresa de desarrollo de software, mantención y soporte ",
  });
});

// Ruta servicios
app.get("/servicios", (req, res) => {
  const servicios = [
    {
      nombre: "Diseño web",
      descripcion: "Creación de sitios web informativos y responsivos.",
    },
    {
      nombre: "Desarrollo backend",
      descripcion:
        "Construcción de servidores y rutas usando Node.js y Express.",
    },
    {
      nombre: "Capacitación",
      descripcion: "Clases y talleres introductorios de desarrollo web.",
    },
  ];

  res.render("servicios", {
    titulo: "Servicios",
    servicios,
  });
});

// Ruta contacto
app.get("/contacto", (req, res) => {
  res.render("contacto", {
    titulo: "Contacto",
    correo: "contacto@codigosimple.cl",
    telefono: "+56 9 1234 5678",
    ciudad: "Santiago, Chile",
  });
});

//levantamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor está corriendo en http://localhost:${PORT}`);
});
