// Valida los datos que el usuario puede actualizar en su perfil.

// Revisa que:
// - si se envía fullName, no venga vacío;
// - si se envía address, no venga vacío;
// - si se envía phone, no venga vacío.

// Si hay errores, se agregan al arreglo errors.

export const validateUpdateProfile = (req) => {
  const { fullName, address, phone } = req.body;
  const errors = [];

  if (fullName !== undefined && fullName.trim() === "") {
    errors.push("El nombre completo no puede estar vacío.");
  }

  if (address !== undefined && address.trim() === "") {
    errors.push("La dirección no puede estar vacía.");
  }

  if (phone !== undefined && phone.trim() === "") {
    errors.push("El teléfono no puede estar vacío.");
  }

  return errors;
};
