//logica del crud
//la responsabilidad es manejar la lógica del CRUD
//obtener comida
//buscar comida por id
//crear una nueva comida
//actualizar una comida
//eliminar una comida

import { leerArchivoJSON, escribirArchivoJSON } from "../utils/fileManager.js";

//importante>
//el service NO trabaja con req ni res
//el servie NO renderiza vistas
//el service NO sabe si la respuesta es un JSON o HTML

//solo se encarga de trabajar los datos

const rutaComida = "./data/comidas.json";

export const obtenerTodasLasComidas = async () => {
  const comidas = await leerArchivoJSON(rutaComida);
  return comidas;
};
