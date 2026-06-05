// Valida los datos necesarios para realizar una transferencia.

// Revisa que:
// - la cuenta de origen tenga un UUID válido;
// - la cuenta de destino tenga un UUID válido;
// - ambas cuentas no sean la misma;
// - el monto sea mayor a cero.

// Si hay errores, se agregan al arreglo errors.

import { isValidUUID } from "../utils/uuid.utils.js";

export const validateCreateTransfer = (req) => {
  const { originAccountId, destinationAccountId, amount } = req.body;
  const errors = [];

  if (!originAccountId || !isValidUUID(originAccountId)) {
    errors.push("La cuenta de origen debe tener un UUID válido.");
  }

  if (!destinationAccountId || !isValidUUID(destinationAccountId)) {
    errors.push("La cuenta de destino debe tener un UUID válido.");
  }

  if (originAccountId === destinationAccountId) {
    errors.push("La cuenta de origen y destino no pueden ser la misma.");
  }

  if (!amount || Number(amount) <= 0) {
    errors.push("El monto debe ser mayor a cero.");
  }

  return errors;
};
