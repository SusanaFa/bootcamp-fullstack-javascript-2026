//routes/movimientos.routes.js

import { Router } from "express";
import {
  crearSalida,
  crearEntrada,
} from "../controller/movimiento.controller.js";

const router = Router();

//POST /movimientos/salida
router.post("/salida", crearSalida);

//POST /movimientos/entrada
router.post("/entrada", crearEntrada);

export default router;
