//definir los caminos o rutas de acceso a nuestra aplicacion

import { Router } from "express";

import {
  getProductos,
  getProductoPorId,
  getProductoPorNombre,
  postProducto,
  putProducto,
  deleteProducto,
} from "../controller/productos.controller.js";

const router = Router();

//GET /productos
router.get("/", getProductos);

//GET /productos/:id
router.get("/:id", getProductoPorId);

//GET /productos/buscar/:nombre
router.get("/buscar/:nombre", getProductoPorNombre);

//POST /productos
router.post("/", postProducto);

//PUT /productos/:id
router.put("/:id", putProducto);

//DELETE /productos/:id
router.delete("/:id", deleteProducto);

export default router;
