//services/movimientos.service.js
import { pool } from "../config/db.js";

export const registrarSalida = async ({ productoId, cantidad }) => {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    //1- buscar el producto
    const productoResultado = await client.query(
      "SELECT * FROM productos WHERE id= $1",
      [productoId],
    );

    const producto = productoResultado.rows[0];

    //2- valido que exista
    if (!producto) {
      throw new Error("Producto no encontrado");
    }

    //3- valido que tenga una cantidad suficiente
    if (producto.cantidad < cantidad) {
      throw new Error("Cantidad insuficiente disponible");
    }

    //4- Registrar el movimiento de salida
    const registrarMovimiento = await client.query(
      `INSERT INTO movimientos (producto_id, cantidad, tipo)
    VALUES($1,$2,$3)
    RETURNING *`,
      [productoId, cantidad, "SALIDA"],
    );

    //5- descontar la cantidad del producto
    await client.query(
      `UPDATE productos
    SET cantidad = cantidad - $1
    WHERE id = $2`,
      [cantidad, productoId],
    );

    //6- Confirmar todos los cambios
    await client.query("COMMIT");

    return registrarMovimiento.rows[0];
  } catch (error) {
    //7- si algo llega a fallar, revertimos todo
    await client.query("ROLLBACK");
    throw error;
  } finally {
    //8- liberar al cliente. lo devolvemos al pool
    client.release();
  }
};

export const registrarEntrada = async ({ productoId, cantidad }) => {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    //1- buscar el producto
    const productoResultado = await client.query(
      "SELECT * FROM productos WHERE id = $1",
      [productoId],
    );

    const producto = productoResultado.rows[0];

    //2- validar que el producto exista
    if (!producto) {
      throw new Error("Producto no encontrado");
    }

    //3- Registramos el movimiento de entrada
    const registrarMovimiento = await client.query(
      `INSERT INTO movimientos (producto_id, cantidad, tipo) 
        VALUES ($1,$2,$3)
        RETURNING *`,
      [productoId, cantidad, "ENTRADA"],
    );

    //4- aumentar la cantidad disponible del producto
    await client.query(
      `UPDATE productos 
      SET cantidad = cantidad + $1 
      WHERE id = $2`,
      [cantidad, productoId],
    );

    //5- confirmar la transacción
    await client.query("COMMIT");

    return registrarMovimiento.rows[0];
  } catch (error) {
    //si algo falla, deshacemos todo.
    await client.query("ROLLBACK");
    throw error;
  } finally {
    //siempre siempre, liberamos al cliente
    client.release();
  }
};
