//controller/movimiento.controller.js

import {
  registrarSalida,
  registrarEntrada,
} from "../services/movimientos.service.js";

//POST /movimientos/salida
export const crearSalida = async (req, res) => {
  try {
    const { productoId, cantidad } = req.body;

    if (!productoId || !cantidad) {
      return res.status(400).json({
        mensaje: "productoId y cantidad son obligatorios",
      });
    }

    const productoIdNumero = Number(productoId);
    const cantidadNumero = Number(cantidad);

    if (Number.isNaN(productoIdNumero) || Number.isNaN(cantidadNumero)) {
      return res.status(400).json({
        mensaje: "productoId y cantidad deben ser valores numéricos",
      });
    }

    if (cantidadNumero <= 0) {
      return res.status(400).json({
        mensaje: "La cantidad debe ser mayor a cero",
      });
    }

    const movimiento = await registrarSalida({
      productoId: productoIdNumero,
      cantidad: cantidadNumero,
    });

    return res.status(201).json({
      mensaje: "Salida registrada correctamente",
      movimiento,
    });
  } catch (error) {
    // console.error(`error al registrar la salida, ${error.message}`);
    return res.status(400).json({
      mensaje: "No se pudo registrar la salida",
      error: error.message,
    });
  }
};

//POST /movimientos/entrada
export const crearEntrada = async (req, res) => {
  try {
    const { productoId, cantidad } = req.body;

    if (!productoId || !cantidad) {
      return res.status(400).json({
        mensaje: "ProductoId y cantidad son obligatorios",
      });
    }

    const productoIdNumero = Number(productoId);
    const cantidadNumero = Number(cantidad);

    if (Number.isNaN(productoIdNumero) || Number.isNaN(cantidadNumero)) {
      return res.status(400).json({
        mensaje: "ProductoId y cantidad deben ser valores numéricos",
      });
    }

    if (cantidadNumero <= 0) {
      return res.status(400).josn({
        mensaje: "La cantidad debe ser mayor a cero",
      });
    }

    const movimiento = await registrarEntrada({
      productoId: productoIdNumero,
      cantidad: cantidadNumero,
    });

    return res.status(201).json({
      mensaje: "Entrada registrada correctamente",
      movimiento,
    });
  } catch (error) {
    return res.status(400).json({
      mensaje: "No se pudo registrar la entrada",
      error: error.message,
    });
  }
};
