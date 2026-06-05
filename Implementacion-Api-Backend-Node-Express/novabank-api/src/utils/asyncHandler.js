//manipulador de controladores asincrono

export const asyncHandler = (controllerFunction) => {
  return (req, res, next) => {
    Promise.resolve(controllerFunction(req, res, next).catch(next));
  };
};

//con asyncHandler evitamos incluir un try catch a cada controlador.
//si algo falla en el controlador lo enviamos directo a un middleware que se encarga de
//manejar los errores
