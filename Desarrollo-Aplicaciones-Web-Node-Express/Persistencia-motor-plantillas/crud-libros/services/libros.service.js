//contener la lógica del crud
//c = create
//r = read
//u = update
//d = delete

// post
// get
// put
// delete

import { leerArchivoJSON, escribirArchivoJSON } from "../utils/fileManager.js";

const rutaLibros = "./data/libros.json";

//servicio para obtener todos los libros
export async function obtenerTodosLosLibros() {
  const libros = await leerArchivoJSON(rutaLibros);
  return libros;
}

//servicio para buscar un libro por id
export async function buscarLibroPorId(id) {
  const libros = await leerArchivoJSON(rutaLibros);
  const libroEncontrado = libros.find((libro) => libro.id === id);
  return libroEncontrado;
}

//servicio para crear un nuevo libro
export async function crearNuevoLibro(datosLibro) {
  const libros = await leerArchivoJSON(rutaLibros);

  const nuevoId = libros.length > 0 ? libros[libros.length - 1].id + 1 : 1;

  const nuevoLibro = {
    id: nuevoId,
    titulo: datosLibro.titulo,
    autor: datosLibro.autor,
    anio: Number(datosLibro.anio),
    genero: datosLibro.genero,
  };

  libros.push(nuevoLibro);

  const guardadoCorrecto = await escribirArchivoJSON(rutaLibros, libros);

  if (!guardadoCorrecto) {
    return null;
  }

  return nuevoLibro;
}

//servicio para actualizar un libro existente
export async function actualizarLibroPorId(id, datosActualizados) {
  const libros = await leerArchivoJSON(rutaLibros);
  const indexLibro = libros.findIndex((libro) => libro.id === id);

  if (indexLibro === -1) {
    return null;
  }

  const libroActualizado = {
    ...libros[indexLibro],
    titulo: datosActualizados.titulo || libros[indexLibro].titulo,
    autor: datosActualizados.autor || libros[indexLibro].autor,
    anio: datosActualizados.anio
      ? Number(datosActualizados.anio)
      : libros[indexLibro].anio,
    genero: datosActualizados.genero || libros[indexLibro].genero,
  };

  libros[indexLibro] = libroActualizado;

  const guardadoCorrecto = await escribirArchivoJSON(rutaLibros, libros);

  if (!guardadoCorrecto) {
    return null;
  }

  return libroActualizado;
}

//servicio para eliminar un libro por id
export async function eliminarPorId(id) {
  const libros = await leerArchivoJSON(rutaLibros);

  const libroExiste = libros.some((libro) => libro.id === id);

  if (!libroExiste) {
    return null;
  }

  const librosActualizados = libros.filter((libro) => libro.id !== id);

  const guardadoCorrecto = await escribirArchivoJSON(
    rutaLibros,
    librosActualizados,
  );

  return guardadoCorrecto;
}
