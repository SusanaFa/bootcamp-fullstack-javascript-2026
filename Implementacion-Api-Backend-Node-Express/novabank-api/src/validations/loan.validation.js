//   Valida los datos necesarios para solicitar un préstamo.

//   Revisa que:
//   1- la cuenta tenga un UUID válido;
//   2- el monto sea mayor a cero;
//   3- la cantidad de cuotas sea mayor a cero.

//   Si hay errores, se agregan al arreglo errors.

import { isValidUUID } from "../utils/uuid.utils.js";

export const validateCreateLoan = (req) => {
  const { accountId, amount, installments } = req.body;
  const errors = [];

  if (!accountId || !isValidUUID(accountId)) {
    errors.push("La cuenta debe tener un UUID válido.");
  }

  if (!amount || Number(amount) <= 0) {
    errors.push("El monto del préstamo debe ser mayor a cero.");
  }

  if (!installments || Number(installments) <= 0) {
    errors.push("La cantidad de cuotas debe ser mayor a cero.");
  }

  return errors;
};
