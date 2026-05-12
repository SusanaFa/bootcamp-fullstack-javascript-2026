import { pool } from "../config/db.js";

export const obtenerProductos = async () => {
  const query = "SELECT * FROM productos ORDER BY id ASC";
  const resultado = await pool.query(query);

  return resultado.rows;
};
