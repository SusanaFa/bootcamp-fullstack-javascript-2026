// Valida que el usuario indique un tipo de cuenta válido.
// Solo se permiten cuentas "corriente" o "ahorro".
// Si hay errores, se agregan al arreglo errors.

export const validateCreateAccount = (req) => {
  const { type } = req.body;
  const errors = [];

  const allowedTypes = ["corriente", "ahorro"];

  if (!type) {
    errors.push("El tipo de cuenta es obligatorio.");
  } else if (!allowedTypes.includes(type)) {
    errors.push("El tipo de cuenta debe ser corriente o ahorro.");
  }

  return errors;
};
