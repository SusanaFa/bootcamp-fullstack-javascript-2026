import { readFile, writeFile } from "node:fs/promises";

const rutaArchivo = "./data/productos.json";

async function leerProductos() {
  try {
    const datos = await readFile(rutaArchivo, "utf-8");
    const productos = JSON.parse(datos);
    return productos;
  } catch (error) {
    console.log("Error al leer el archivo: ", error.message);
    return [];
  }
}

async function guardarProductos(productos) {
  try {
    const datosJSON = JSON.stringify(productos, null, 2);
    await writeFile(rutaArchivo, datosJSON, "utf-8");
    console.log("Productos guardados correctamente");
  } catch (error) {
    console.log("Error al guardar el archivo: ", error.message);
  }
}

async function main() {
  console.log("Leyendo los productos desde el archivo...");

  const productos = await leerProductos();

  console.log("Productos actuales");
  console.log(productos);

  //creamos un nuevo producto
  const nuevoProducto = {
    id: 4,
    nombre: "Monitor",
    precio: 150000,
    categoria: "accesorio",
  };

  productos.push(nuevoProducto);

  console.log("Nuevo producto agregado");
  console.log(nuevoProducto);

  await guardarProductos(productos);

  const productosActualizados = await leerProductos();

  console.log("Productos actualizados");
  console.log(productosActualizados);
}

main();
