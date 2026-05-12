import { obtenerProductos } from "./services/productos.service.js";
import { pool } from "./config/db.js";

const main = async () => {
  try {
    const productos = await obtenerProductos();
    console.log("====== Listado de productos ======");
    console.table(productos);
  } catch (error) {
    console.error(`Error al consultar productos: ${error.message}`);
  } finally {
    await pool.end();
    console.log("Conexión cerrada. ");
  }
};

main();
