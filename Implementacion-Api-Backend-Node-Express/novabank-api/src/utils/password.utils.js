import bcrypt from "bcrypt";
//Hashea una contraseña antes de guardarla en la bd
export const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

//comparar una contraseña que envía el usuario, con la contraseña que ya esta guardada en la bd
export const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};
