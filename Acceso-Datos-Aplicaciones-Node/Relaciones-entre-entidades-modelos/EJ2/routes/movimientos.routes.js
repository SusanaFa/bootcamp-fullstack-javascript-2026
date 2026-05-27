// routes/movimientos.routes.js

import { Router } from "express";

import {
  getMovimientos,
  crearSalida,
  crearEntrada,
} from "../controllers/movimientos.controller.js";

const router = Router();

// GET /movimientos
router.get("/", getMovimientos);

// POST /movimientos/salida
router.post("/salida", crearSalida);

// POST /movimientos/entrada
router.post("/entrada", crearEntrada);

export default router;
