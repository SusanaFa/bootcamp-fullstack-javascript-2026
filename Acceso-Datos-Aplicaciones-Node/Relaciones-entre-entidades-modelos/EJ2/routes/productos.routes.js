// routes/productos.routes.js

import { Router } from "express";

import {
  getProductos,
  getProductoPorId,
  getProductoPorNombre,
  getProductoConMovimientos,
  postProducto,
  putProducto,
  deleteProducto,
} from "../controllers/productos.controller.js";

const router = Router();

// GET /productos
router.get("/", getProductos);

// GET /productos/buscar/:nombre
router.get("/buscar/:nombre", getProductoPorNombre);

// GET /productos/:id/movimientos
// Esta ruta debe ir antes de "/:id" para evitar conflictos.
router.get("/:id/movimientos", getProductoConMovimientos);

// GET /productos/:id
router.get("/:id", getProductoPorId);

// POST /productos
router.post("/", postProducto);

// PUT /productos/:id
router.put("/:id", putProducto);

// DELETE /productos/:id
router.delete("/:id", deleteProducto);

export default router;
