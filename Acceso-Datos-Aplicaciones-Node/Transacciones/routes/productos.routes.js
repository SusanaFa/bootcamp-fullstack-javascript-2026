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

router.get("/", getProductos);

router.get("/buscar/:nombre", getProductoPorNombre);

router.get("/:id", getProductoPorId);

router.post("/", postProducto);

router.put("/:id", putProducto);

router.delete("/:id", deleteProducto);

export default router;
