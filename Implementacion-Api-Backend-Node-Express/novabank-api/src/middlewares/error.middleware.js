//Middleware centralizado de errores.

//Todos los errores controlados o inesperados llegarán aquí.

const errorMiddleware = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;

  return res.status(statusCode).json({
    ok: false,
    message: error.message || "Error interno del servidor.",
    errors: error.errors || null,
  });
};

export default errorMiddleware;

// En Express, req trae la información de la petición, res sirve para responder, y next permite continuar al siguiente paso.
// Los middlewares usan esos tres porque están entre la ruta y el controller. Validan, protegen o manejan errores antes de que la petición siga avanzando.
