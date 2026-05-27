//services/productos.service.js
import { Producto, Movimiento } from "../models/index.js";
import { Op } from "sequelize";

//obtener todos los productos
//select * from productos;
export const obtenerProductos = async () => {
  const productos = await Producto.findAll({
    order: [["id", "ASC"]],
  });

  return productos;
};

//obtener un producto por id
//select * from productos where id= id;
export const obtenerProductoPorId = async (id) => {
  const producto = await Producto.findByPk(id);

  return producto;
};

//buscar productos por descripcion
export const buscarProductosPorNombre = async (nombre) => {
  const productos = await Producto.findAll({
    where: {
      descripcion: {
        [Op.iLike]: `%${nombre}%`,
      },
    },
    order: [["id", "ASC"]],
  });

  return productos;
};

//obtener un producto con sus movimientos asociados
export const obtenerProductoConMovimientos = async (id) => {
  const producto = await Producto.findByPk(id, {
    include: {
      model: Movimiento,
      as: "movimientos",
    },
  });

  return producto;
};

//crear un producto
// C
export const crearProducto = async ({ descripcion, cantidad }) => {
  const nuevoProducto = await Producto.create({
    descripcion,
    cantidad,
  });

  return nuevoProducto;
};

//actualizar un producto
// U
export const actualizarProducto = async (id, { descripcion, cantidad }) => {
  const producto = await Producto.findByPk(id);

  if (!producto) {
    return null;
  }

  producto.descripcion = descripcion;
  producto.cantidad = cantidad;

  await producto.save();

  return producto;
};

//eliminar un producto
//D
export const eliminarProducto = async (id) => {
  const producto = await Producto.findByPk(id);

  if (!producto) {
    return null;
  }

  await producto.destroy();

  return producto;
};
