// app.js

import express from "express";
import productosRoutes from "./routes/productos.routes.js";

const app = express();

const PORT = 3000;
app.use(express.json());

// Ruta principal de prueba.
// Sirve para verificar rápidamente que el servidor está funcionando.
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

// Conectamos las rutas de productos.
// Todo lo que venga desde /productos será manejado por productosRoutes.
app.use("/productos", productosRoutes);

// Levantamos el servidor.
// A diferencia del ejercicio anterior de consola, aquí NO cerramos el pool,
// porque el servidor debe quedar activo esperando peticiones.
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
