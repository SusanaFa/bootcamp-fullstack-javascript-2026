import {
  obtenerProductos,
  obtenerProductoPorId,
  buscarProductosPorNombre,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
} from "../services/productos.service.js";

// GET /productos
export const getProductos = async (req, res) => {
  try {
    const productos = await obtenerProductos();

    res.status(200).json(productos);
  } catch (error) {
    console.error(`Error al obtener productos: ${error.message}`);

    res.status(500).json({
      mensaje: "Error interno en el servidor",
    });
  }
};

// GET /productos/:id
export const getProductoPorId = async (req, res) => {
  try {
    const { id } = req.params;

    // req.params siempre llega como string.
    // Por eso validamos que realmente sea un número antes de consultar.
    const idNumero = Number(id);

    if (Number.isNaN(idNumero)) {
      return res.status(400).json({
        mensaje: "El id debe ser un número válido",
      });
    }

    const producto = await obtenerProductoPorId(idNumero);

    if (!producto) {
      return res.status(404).json({
        mensaje: "No existe un producto con ese id",
      });
    }

    res.status(200).json(producto);
  } catch (error) {
    console.error(`Error al obtener producto por id: ${error.message}`);

    res.status(500).json({
      mensaje: "Error interno en el servidor",
    });
  }
};

// GET /productos/buscar/:nombre
export const getProductoPorNombre = async (req, res) => {
  try {
    const { nombre } = req.params;

    const productos = await buscarProductosPorNombre(nombre);

    if (productos.length === 0) {
      return res.status(404).json({
        mensaje: "No existen productos con ese nombre o descripción",
      });
    }

    res.status(200).json(productos);
  } catch (error) {
    console.error(`Error al buscar productos: ${error.message}`);

    res.status(500).json({
      mensaje: "Error interno en el servidor",
    });
  }
};

// POST /productos
export const postProducto = async (req, res) => {
  try {
    const { descripcion, precio, stock } = req.body;

    if (!descripcion || precio === undefined || stock === undefined) {
      return res.status(400).json({
        mensaje: "Faltan datos obligatorios: descripcion, precio o stock",
      });
    }

    const precioNumero = Number(precio);
    const stockNumero = Number(stock);

    if (Number.isNaN(precioNumero) || Number.isNaN(stockNumero)) {
      return res.status(400).json({
        mensaje: "El precio y el stock deben ser valores numéricos",
      });
    }

    const nuevoProducto = await crearProducto({
      descripcion,
      precio: precioNumero,
      stock: stockNumero,
    });

    res.status(201).json({
      mensaje: "Producto creado correctamente",
      producto: nuevoProducto,
    });
  } catch (error) {
    console.error(`Error al crear producto: ${error.message}`);

    res.status(500).json({
      mensaje: "Error interno en el servidor",
    });
  }
};

// PUT /productos/:id
export const putProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { descripcion, precio, stock } = req.body;

    const idNumero = Number(id);

    if (Number.isNaN(idNumero)) {
      return res.status(400).json({
        mensaje: "El id debe ser un número válido",
      });
    }

    if (!descripcion || precio === undefined || stock === undefined) {
      return res.status(400).json({
        mensaje: "Faltan datos obligatorios: descripcion, precio o stock",
      });
    }

    const precioNumero = Number(precio);
    const stockNumero = Number(stock);

    if (Number.isNaN(precioNumero) || Number.isNaN(stockNumero)) {
      return res.status(400).json({
        mensaje: "El precio y el stock deben ser valores numéricos",
      });
    }

    const productoActualizado = await actualizarProducto(idNumero, {
      descripcion,
      precio: precioNumero,
      stock: stockNumero,
    });

    if (!productoActualizado) {
      return res.status(404).json({
        mensaje: "No existe un producto con ese id",
      });
    }

    res.status(200).json({
      mensaje: "Producto actualizado correctamente",
      producto: productoActualizado,
    });
  } catch (error) {
    console.error(`Error al actualizar producto: ${error.message}`);

    res.status(500).json({
      mensaje: "Error interno en el servidor",
    });
  }
};

// DELETE /productos/:id
export const deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;

    const idNumero = Number(id);

    if (Number.isNaN(idNumero)) {
      return res.status(400).json({
        mensaje: "El id debe ser un número válido",
      });
    }

    const productoEliminado = await eliminarProducto(idNumero);

    if (!productoEliminado) {
      return res.status(404).json({
        mensaje: "No existe un producto con ese id",
      });
    }

    res.status(200).json({
      mensaje: "Producto eliminado correctamente",
      producto: productoEliminado,
    });
  } catch (error) {
    console.error(`Error al eliminar producto: ${error.message}`);

    res.status(500).json({
      mensaje: "Error interno en el servidor",
    });
  }
};
