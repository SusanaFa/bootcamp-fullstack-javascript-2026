import fs from "node:fs/promises";

//declarada
export async function leerArchivoJSON(rutaArchivo) {
  try {
    const data = await fs.readFile(rutaArchivo, "utf-8");
    //pasa de texto formato JSON a arreglo u objeto js
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error al leer el archivo JSON: ${error.message}`);
    return [];
  }
}

export async function escribirArchivoJSON(rutaArchivo, data) {
  try {
    //convierte de arreglo u objeto a texto en formato JSON
    await fs.writeFile(rutaArchivo, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error(`Error al escribir el archivo JSON: ${error.message}`);
    return false;
  }
}

// //flecha
// export const nombreFuncion = async()=>{

// }
// //expresada
// const algofuncion = function(){

// }
