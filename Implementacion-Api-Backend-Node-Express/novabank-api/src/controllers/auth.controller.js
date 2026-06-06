import * as authService from "../services/auth.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { successResponse } from "../utils/response.utils.js";

export const register = asyncHandler(async (req, res) => {
  const user = await authService.register(req.body);
  successResponse(res, 201, "Usuario registrado correctamente.", user);
});

export const login = asyncHandler(async (req, res) => {
  const data = await authService.login(req.body);
  successResponse(res, 200, "Inicio de sesión exitoso", data);
});
