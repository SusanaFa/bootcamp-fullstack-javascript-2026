// app.js
import express from "express";
import productosRoutes from "./routes/productos.routes.js";
import movimientosRoutes from "./routes/movimientos.routes.js";
import { sequelize } from "./config/database.js";

// Importamos los modelos relacionados.
// Esto asegura que Sequelize cargue las asociaciones definidas en models/index.js.
import "./models/index.js";

const app = express();

const PORT = 3000;

// Middleware para permitir recibir JSON en el body de las peticiones.
app.use(express.json());

// Ruta inicial para probar que el servidor está funcionando.
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

// Rutas principales de productos.
app.use("/productos", productosRoutes);

// Rutas principales de movimientos.
app.use("/movimientos", movimientosRoutes);

// Función para iniciar el servidor.
// Antes de levantar Express, probamos la conexión con la base de datos.
const iniciarServidor = async () => {
  try {
    // authenticate() prueba si Sequelize puede conectarse a PostgreSQL.
    await sequelize.authenticate();

    console.log("Conexión ORM con PostgreSQL realizada correctamente.");

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error.message);
  }
};

iniciarServidor();
