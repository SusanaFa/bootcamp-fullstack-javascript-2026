import fs from "node:fs/promises";

export const leerArchivoJSON = async (rutaArchivo) => {
  try {
    const data = await fs.readFile(rutaArchivo, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error al leer el archivo JSON: ${error.message}`);
    return [];
  }
};

export const escribirArchivoJSON = async (rutaArchivo, data) => {
  try {
    await fs.writeFile(rutaArchivo, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error(`Error al escribir el archivo JSON: ${error.message}`);
    return false;
  }
};
