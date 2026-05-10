//definir el metodo y endpoint
import { Router } from "express";

import {
  obtenerLibros,
  obtenerLibroPorId,
  crearLibro,
  actualizarLibro,
  eliminarLibro,
} from "../controllers/libros.controller.js";

const router = Router();

//GET /libros
//Ruta para obtener todos los libros
router.get("/", obtenerLibros);

//GET /libros/:id
//Ruta para obtener un libro específio por su id
router.get("/:id", obtenerLibroPorId);

//POST /libros
//Ruta para crear un nuevo libro
router.post("/", crearLibro);

//PUT /libros/:id
//Ruta para actualizar un libro existente
router.put("/:id", actualizarLibro);

//DELETE /libros/:id
//Ruta para eliminar un libro existente
router.delete("/:id", eliminarLibro);

export default router;
