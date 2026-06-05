import ApiError from "../utils/ApiError.js";
import { verifyToken } from "../utils/jwt.utils.js";

//   Middleware para proteger rutas privadas.

//   Espera recibir:
//   Authorization: Bearer TOKEN

export const protect = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    throw new ApiError(401, "Token no proporcionado.");
  }

  const [type, token] = authorizationHeader.split(" ");

  if (type !== "Bearer" || !token) {
    throw new ApiError(401, "Formato de token inválido.");
  }

  try {
    const decoded = verifyToken(token);

    //  Guardamos los datos del usuario autenticado en req.user.
    // Así los controllers y services pueden saber quién hace la petición.

    req.user = decoded;

    next();
  } catch (error) {
    throw new ApiError(401, "Token inválido o expirado.");
  }
};

// En Express, req trae la información de la petición, res sirve para responder, y next permite continuar al siguiente paso.
// Los middlewares usan esos tres porque están entre la ruta y el controller. Validan, protegen o manejan errores antes de que la petición siga avanzando.
