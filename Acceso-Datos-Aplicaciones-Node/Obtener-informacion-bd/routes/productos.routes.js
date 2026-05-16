// routes/productos.routes.js
import { Router } from "express";

import {
  getProductos,
  getProductoPorId,
  getProductosPorNombre,
} from "../controllers/productos.controllers.js";

const router = Router();

// GET /productos
router.get("/", getProductos);

// GET /productos/buscar/mouse
router.get("/buscar/:nombre", getProductosPorNombre);

// GET /productos/5
router.get("/:id", getProductoPorId);

export default router;
