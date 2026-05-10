import { readFile, writeFile } from "node:fs/promises";

export async function leerArchivoJson(rutaArchivo) {
  try {
    const datos = await readFile(rutaArchivo, "utf-8");
    //pasa de texto (json) a objeto js
    const datosConvertidos = JSON.parse(datos);

    return datosConvertidos;
  } catch (error) {
    console.log(`Error al leer archivo JSON: ${error.message}`);
    return [];
  }
}

export async function escribirArchivoJson(rutaArchivo, datos) {
  try {
    //convierte los datos js a texto json
    const datosJSON = JSON.stringify(datos, null, 2);
    await writeFile(rutaArchivo, datosJSON, "utf-8");
    return true;
  } catch (error) {
    console.log(`Error al escribir archivo JSON: ${error.message}`);
    return false;
  }
}
