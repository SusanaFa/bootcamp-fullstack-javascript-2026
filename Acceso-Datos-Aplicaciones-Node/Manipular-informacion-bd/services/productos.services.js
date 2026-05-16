//services/productos.services.js

// El servicio se encarga de hablar directamente con la base de datos.
// C: CREATE - CREAR
// R: READ - LEER
// U: UPDATE - ACTUALIZAR
// D: DELETE - ELIMINAR

import { pool } from "../config/db.js";

export const obtenerProductos = async () => {
  const query = "SELECT * FROM productos ORDER BY id ASC";
  const resultado = await pool.query(query);

  return resultado.rows;
};

export const obtenerProductoPorId = async (id) => {
  const query = "SELECT * FROM productos WHERE id = $1";
  const values = [id];
  const resultado = await pool.query(query, values);

  return resultado.rows[0];
};

export const buscarProductosPorNombre = async (nombre) => {
  const query =
    "SELECT * FROM productos WHERE descripcion ILIKE $1 ORDER BY id ASC";
  const values = [`%${nombre}%`];
  const resultado = await pool.query(query, values);

  return resultado.rows;
};

export const crearProducto = async ({ descripcion, cantidad }) => {
  const query = `INSERT INTO productos (descripcion, cantidad)
  VALUES ($1, $2)
  RETURNING *`;

  const values = [descripcion, cantidad];

  const resultado = await pool.query(query, values);

  return resultado.rows[0];
};

export const actualizarProducto = async (id, { descripcion, cantidad }) => {
  const query = `UPDATE productos SET descripcion = $1, cantidad = $2 WHERE id = $3 RETURNING *`;

  const values = [descripcion, cantidad, id];

  const resultado = await pool.query(query, values);

  return resultado.rows[0];
};

export const eliminarProducto = async (id) => {
  const query = `DELETE FROM productos WHERE id = $1 RETURNING *`;

  const values = [id];

  const resultado = await pool.query(query, values);

  return resultado.rows[0];
};
