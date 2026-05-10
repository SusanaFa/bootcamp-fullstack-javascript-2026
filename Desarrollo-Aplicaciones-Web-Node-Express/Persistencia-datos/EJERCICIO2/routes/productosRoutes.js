import { Router } from "express";
import { leerArchivoJson, escribirArchivoJson } from "../utils/fileManager.js";

const router = Router();

const rutaProductos = "./data/productos.json";

//get /productos
//muestra toda la lista de productos
router.get("/", async (req, res) => {
  const productos = await leerArchivoJson(rutaProductos);

  res.status(200).json({
    mensaje: "Listado de productos",
    cantidad: productos.length,
    productos: productos,
  });
});

//get /productos/:id
//busqueda de producto mediante id
router.get("/:id", async (req, res) => {
  const productos = await leerArchivoJson(rutaProductos);
  //tomamos el id que viene como parametro desde la ruta
  const id = Number(req.params.id);
  //buscamos el producto mediante el id que llegó como parametro
  const productoEncontrado = productos.find((producto) => producto.id === id);

  if (!productoEncontrado) {
    return res.status(404).json({
      mensaje: "Producto no encontrado",
    });
  }

  res.status(200).json({
    mensaje: "Producto encontrado",
    producto: productoEncontrado,
  });
});

//post /productos
//agregar un producto
router.post("/", async (req, res) => {
  const productos = await leerArchivoJson(rutaProductos);
  const { nombre, precio, categoria } = req.body;

  if (!nombre || !precio || !categoria) {
    return res.status(400).json({
      mensaje: "Faltan datos. Debes enviar nombre, precio y categoria",
    });
  }

  //crear un nuevo id
  const nuevoId =
    productos.length > 0 ? productos[productos.length - 1].id + 1 : 1;

  const nuevoProducto = {
    id: nuevoId,
    nombre: nombre,
    precio: Number(precio),
    categoria: categoria,
  };

  productos.push(nuevoProducto);

  const guardadoCorrecto = await escribirArchivoJson(rutaProductos, productos);

  if (!guardadoCorrecto) {
    return res.status(500).json({
      mensaje: "Error al guardar el producto",
    });
  }

  res.status(201).json({
    mensaje: "Producto creado correctamente",
    producto: nuevoProducto,
  });
});

//delete /productos/:id
//eliminar un producto mediante su id
router.delete("/:id", async (req, res) => {
  const productos = await leerArchivoJson(rutaProductos);
  const id = Number(req.params.id);

  const productoExiste = productos.some((producto) => producto.id === id);

  if (!productoExiste) {
    return res.status(404).json({
      mensaje: "No se puede eliminar. Producto no encontrado.",
    });
  }

  const productosActualizados = productos.filter(
    (producto) => producto.id !== id,
  );

  const guardadoCorrecto = await escribirArchivoJson(
    rutaProductos,
    productosActualizados,
  );

  if (!guardadoCorrecto) {
    return res.status(500).json({
      mensaje: "Error al eliminar el producto",
    });
  }

  res.status(200).json({
    mensaje: "Producto eliminado correctamente",
    idEliminado: id,
  });
});

export default router;
