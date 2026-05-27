import { sequelize, probarConexion } from "./config/db.js";
import { Producto } from "./models/Producto.js";
import { Movimiento } from "./models/Movimiento.js";

const main = async () => {
  try {
    // 1. Probamos la conexión a la base de datos.
    await probarConexion();

    console.log("\nListado de productos:");

    const productos = await Producto.findAll({
      order: [["id", "ASC"]],
    });

    console.table(productos.map((producto) => producto.toJSON()));

    console.log("\nBuscar producto por ID:");

    const producto = await Producto.findByPk(1);

    if (!producto) {
      console.log("Producto no encontrado");
    } else {
      console.log(producto.toJSON());
    }

    console.log("\nCrear un nuevo producto:");

    const nuevoProducto = await Producto.create({
      descripcion: "Audífonos bluetooth",
      cantidad: 15,
    });

    console.log(nuevoProducto.toJSON());

    console.log("\nActualizar producto:");

    await Producto.update(
      { cantidad: 20 },
      { where: { id: nuevoProducto.id } },
    );

    const productoActualizado = await Producto.findByPk(nuevoProducto.id);
    console.log(productoActualizado.toJSON());

    console.log("\nCrear movimiento:");

    const nuevoMovimiento = await Movimiento.create({
      producto_id: nuevoProducto.id,
      cantidad: 5,
      tipo: "entrada",
    });

    console.log(nuevoMovimiento.toJSON());

    console.log("\nEliminar producto creado para la prueba:");

    await Producto.destroy({
      where: { id: nuevoProducto.id },
    });

    console.log("Producto eliminado correctamente");
  } catch (error) {
    console.error("Error en la ejecución:", error.message);
  } finally {
    // Cerramos la conexión al terminar el script.
    await sequelize.close();
  }
};

main();
