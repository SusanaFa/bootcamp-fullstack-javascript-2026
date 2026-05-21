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

export const crearProducto = async ({ descripcion, precio, stock }) => {
  const query = `
    INSERT INTO productos (descripcion, precio, stock)
    VALUES ($1, $2, $3)
    RETURNING *
  `;

  const values = [descripcion, precio, stock];

  const resultado = await pool.query(query, values);

  return resultado.rows[0];
};

export const actualizarProducto = async (
  id,
  { descripcion, precio, stock },
) => {
  const query = `
    UPDATE productos
    SET descripcion = $1,
        precio = $2,
        stock = $3
    WHERE id = $4
    RETURNING *
  `;

  const values = [descripcion, precio, stock, id];

  const resultado = await pool.query(query, values);

  return resultado.rows[0];
};

export const eliminarProducto = async (id) => {
  const query = `
    DELETE FROM productos
    WHERE id = $1
    RETURNING *
  `;

  const values = [id];

  const resultado = await pool.query(query, values);

  return resultado.rows[0];
};
