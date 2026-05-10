import express from "express";
import { engine } from "express-handlebars";
// import comidaRoutes from "./routes"

const app = express();
const PORT = 3000;

//middleware para leer datos enviados mediante formularios html
app.use(express.urlencoded({ extended: true }));

//middleware para leer datos json
app.use(express.json());

//middleware para servir los archivos estaticos
app.use(express.static("public"));

//configuracion de handlebars como motor de plantillas
app.engine("handlebars", engine({ defaultLayout: "main" }));

//indicamos a express que usaremos handlebars como motos de plantillas
app.set("view engine", "handlebars");

//indicamos donde estará la carpeta principal de las vistas
app.set("views", "./views");

app.get("/", (req, res) => {
  res.status(200).json({
    mensaje: "Servidor de comidas funcionando correctamente",
  });
});

// app.use("/comidas", comidaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
