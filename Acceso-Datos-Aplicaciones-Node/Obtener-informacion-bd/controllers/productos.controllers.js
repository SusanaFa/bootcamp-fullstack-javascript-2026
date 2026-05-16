// controllers/productos.controllers.js

// Importamos las funciones del servicio.
// El controlador no escribe SQL directamente; solo coordina la petición y la respuesta.
import {
  obtenerProductos,
  obtenerProductoPorId,
  buscarProductosPorDescripcion,
} from "../services/productos.services.js";

// GET /productos
// Controlador para obtener todos los productos.
export const getProductos = async (req, res) => {
  try {
    const productos = await obtenerProductos();

    // Respondemos con estado 200 porque la consulta fue exitosa.
    res.status(200).json(productos);
  } catch (error) {
    console.error("Error al obtener productos:", error.message);

    // Si ocurre un error inesperado, respondemos con estado 500.
    res.status(500).json({
      mensaje: "Error interno del servidor",
    });
  }
};

// GET /productos/:id
// Controlador para obtener un producto específico por id.
export const getProductoPorId = async (req, res) => {
  try {
    // req.params contiene los parámetros dinámicos de la URL.
    // Ejemplo: en /productos/5, el id será "5".
    const { id } = req.params;

    const producto = await obtenerProductoPorId(id);

    // Si el servicio no encuentra producto, devuelve undefined.
    if (!producto) {
      return res.status(404).json({
        mensaje: "No existe un producto con ese id",
      });
    }

    res.status(200).json(producto);
  } catch (error) {
    console.error("Error al obtener producto por id:", error.message);

    res.status(500).json({
      mensaje: "Error interno del servidor",
    });
  }
};

// GET /productos/buscar/:descripcion
// Controlador para buscar productos por descripción.
export const getProductosPorNombre = async (req, res) => {
  try {
    // Ejemplo: en /productos/buscar/mouse,
    // descripcion tendrá el valor "mouse".
    const { nombre } = req.params;

    const productos = await buscarProductosPorNombre(nombre);

    // Si el arreglo viene vacío, significa que no hubo coincidencias.
    if (productos.length === 0) {
      return res.status(404).json({
        mensaje: "No existen productos con ese nombre",
      });
    }

    res.status(200).json(productos);
  } catch (error) {
    console.error("Error al buscar productos:", error.message);

    res.status(500).json({
      mensaje: "Error interno del servidor",
    });
  }
};
