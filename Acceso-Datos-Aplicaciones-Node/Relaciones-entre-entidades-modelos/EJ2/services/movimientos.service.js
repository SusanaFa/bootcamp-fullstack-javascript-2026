//services/movimientos.service.js
import { sequelize } from "../config/database.js";
import { Producto, Movimiento } from "../models/index.js";
import { Op } from "sequelize";

//obtener todos los movimiento, incluyendo el producto asociado
export const obtenerMovimientos = async () => {
  const movimientos = await Movimiento.findAll({
    include: {
      model: Producto,
      as: "producto",
    },
    order: [["id", "ASC"]],
  });

  return movimientos;
};

//registrar una salida del inventario
export const registrarSalida = async ({ productoId, cantidad }) => {
  const transaccion = await sequelize.transaction();

  try {
    //1-buscar el producto
    const producto = await Producto.findByPk(productoId, {
      transaccion,
    });

    //2- validacion de que el producto exista
    if (!producto) {
      throw new Error("Producto no encontrado");
    }

    //3- validacion de que haya catidad suficiente
    if (producto.cantidad < cantidad) {
      throw new Error("Cantidad insuficiente disponible");
    }

    //4- registrar el movimiento
    const movimiento = await Movimiento.create(
      {
        producto_id: productoId,
        cantidad,
        tipo: "SALIDA",
      },
      { transaccion },
    );

    //5- descontar la cantidad del producto
    producto.cantidad = producto.cantidad - cantidad;

    //6- guardar el cambio en el producto
    await producto.save({ transaccion });

    //7- commitear o confirmar la transaccion
    await transaccion.commit();

    return movimiento;
  } catch (error) {
    //si algo falla, todo vuelve atrás.
    //revertimos todos los cambios
    await transaccion.rollback();

    throw error;
  }
};

// Registrar una entrada del inventario.
export const registrarEntrada = async ({ productoId, cantidad }) => {
  // Creamos una transacción con Sequelize.
  const transaction = await sequelize.transaction();

  try {
    // 1. Buscar el producto.
    const producto = await Producto.findByPk(productoId, {
      transaction,
    });

    // 2. Validar que exista.
    if (!producto) {
      throw new Error("Producto no encontrado");
    }

    // 3. Registrar el movimiento de entrada.
    const movimiento = await Movimiento.create(
      {
        producto_id: productoId,
        cantidad,
        tipo: "ENTRADA",
      },
      {
        transaction,
      },
    );

    // 4. Aumentar la cantidad disponible del producto.
    producto.cantidad = producto.cantidad + cantidad;

    // 5. Guardar el cambio en el producto.
    await producto.save({
      transaction,
    });

    // 6. Confirmar la transacción.
    await transaction.commit();

    return movimiento;
  } catch (error) {
    // Si algo falla, deshacemos los cambios.
    await transaction.rollback();

    throw error;
  }
};
