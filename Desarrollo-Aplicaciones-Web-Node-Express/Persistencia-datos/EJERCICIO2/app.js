import express from "express";
import productosRoutes from "./routes/productosRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    mensaje: "Bienvenido a mi mini aplicación API de productos",
    ruta: {
      listarProductos: "GET /productos",
      buscarProductos: "GET /productos/:id",
      crearProductos: "POST /productos",
      eliminarProductos: "DELETE /productos/:id",
    },
  });
});

app.use("/productos", productosRoutes);
// http://localhost:3000/productos/
//http://localhost:300/productos/:id

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
