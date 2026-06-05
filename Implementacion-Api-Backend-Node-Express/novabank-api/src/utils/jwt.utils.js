import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env.js";

// Genera un token JWT.
// En el payload guardaremos información mínima:
// como el id del usuario y email
export const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
};

// Verifica si un token es válido.
export const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
