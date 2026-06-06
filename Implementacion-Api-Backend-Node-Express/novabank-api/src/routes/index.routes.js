import { Router } from "express";

import authRoutes from "./auth.routes.js";
import router from "./auth.routes.js";

router.get("/health", (req, res) => {
  res.json({
    ok: true,
    message: "Servidor activo, index funcionando",
    service: "Novabank Hola",
  });
});

//rutas de autenticación

/* 
rutas finales:
    /api/v1/auth/register
    /api/v1/auth/login

 */

router.use("/auth", authRoutes);

export default router;
