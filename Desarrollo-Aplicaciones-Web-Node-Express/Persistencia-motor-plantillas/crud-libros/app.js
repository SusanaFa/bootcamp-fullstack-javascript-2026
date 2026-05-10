import express from "express";
import librosRoutes from "./routes/libros.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    mensaje: "Servidor funcionando correctamente",
  });
});

app.use("/libros", librosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor esta corriendo en http://localhost:${PORT}`);
});
