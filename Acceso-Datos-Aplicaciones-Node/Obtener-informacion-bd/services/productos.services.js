//services/productos.services.js

// El servicio se encarga de hablar directamente con la base de datos.
// Aquí escribimos las consultas SQL.

import { pool } from "../config/db.js";

// Obtiene todos los productos de la base de datos.
export const obtenerProductos = async () => {
  const query = "SELECT * FROM productos ORDER BY id ASC";

  const resultado = await pool.query(query);

  // resultado.rows contiene los registros encontrados.
  return resultado.rows;
};

// Obtiene un producto específico según su id.
export const obtenerProductoPorId = async (id) => {
  // Usamos $1 como parámetro para evitar concatenar valores directamente en el SQL.
  const query = "SELECT * FROM productos WHERE id = $1";

  // El valor real del parámetro se envía en este arreglo.
  const values = [id];

  const resultado = await pool.query(query, values);

  // Si no encuentra nada, rows[0] será undefined.
  // El controlador decidirá cómo responder al cliente.
  return resultado.rows[0];
};

// Busca productos según una palabra incluida en la descripción.
export const buscarProductosPorNombre = async (nombre) => {
  // ILIKE permite buscar texto sin distinguir entre mayúsculas y minúsculas.
  const query =
    "SELECT * FROM productos WHERE descripcion ILIKE $1 ORDER BY id ASC";

  // Los signos % permiten buscar coincidencias parciales.
  // Ejemplo: si descripcion es "mouse", se busca "%mouse%".
  const values = [`%${nombre}%`];

  const resultado = await pool.query(query, values);

  return resultado.rows;
};
