//reciba los req y res
import {
  obtenerTodosLosLibros,
  buscarLibroPorId,
  crearNuevoLibro,
  actualizarLibroPorId,
  eliminarPorId,
} from "../services/libros.service.js";

//controlador GET /libros
export async function obtenerLibros(req, res) {
  const libros = await obtenerTodosLosLibros();

  res.status(200).json({
    mensaje: "Listado de libros",
    cantidad: libros.length,
    libros,
  });
}

//controlador GET /libros/:id
export async function obtenerLibroPorId(req, res) {
  const id = Number(req.params.id);

  const libro = await buscarLibroPorId(id);

  if (!libro) {
    return res.status(404).json({
      mensaje: "Libro no encontrado",
    });
  }

  res.status(200).json({
    mensaje: "Libro encontrado",
    libro,
  });
}

//controlador POST /libros
export async function crearLibro(req, res) {
  const { titulo, autor, anio, genero } = req.body;

  if (!titulo || !autor || !anio || !genero) {
    return res.status(400).json({
      mensaje: "Faltan datos. Debes enviar titulo, autor, anio y genero",
    });
  }

  const nuevoLibro = await crearNuevoLibro({ titulo, autor, anio, genero });

  if (!nuevoLibro) {
    return res.status(400).json({
      mensaje: "Error al guardar el libro",
    });
  }

  res.status(201).json({
    mensaje: "Libro creado correctamente",
    libro: nuevoLibro,
  });
}

//PUT /libros/:id
export async function actualizarLibro(req, res) {
  const id = Number(req.params.id);
  const { titulo, autor, anio, genero } = req.body;

  if (!titulo && !autor && !anio && !genero) {
    return res.status(400).json({
      mensaje:
        "Debes enviar al menos un dato para actualizar: titulo, autor, anio o genero",
    });
  }

  const libroActualizado = await actualizarLibroPorId(id, {
    titulo,
    autor,
    anio,
    genero,
  });

  if (!libroActualizado) {
    res.status(404).json({
      mensaje: "No se puede actualizar. Libro no encontrado",
    });
  }

  res.status(200).json({
    mensaje: "Libro actualizado correctamente",
    libro: libroActualizado,
  });
}

//DELETE /libros/:id
export async function eliminarLibro(req, res) {
  const id = Number(req.params.id);

  const eliminadoCorrectamente = await eliminarPorId(id);

  if (!eliminadoCorrectamente) {
    return res.status(404).json({
      mensaje: "No se puede eliminar. Libro no encontrado",
    });
  }

  res.status(200).json({
    mensaje: "Libro eliminado correctamente",
    idEliminado: id,
  });
}
