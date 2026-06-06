import AppiError from "../utils/ApiError.js";
import { hashPassword, comparePassword } from "../utils/password.utils.js";
import { generateToken } from "../utils/jwt.utils.js";
import { User, Account, Movement, sequelize } from "../models/index.js";
import { INITIAL_BALANCE } from "../config/env.js";

export const register = async (userData) => {
  const existingUser = await User.findOne({
    where: {
      email: userData.email,
    },
  });

  if (existingUser) {
    throw new ApiError(409, "El email ya se encuentra registrado");
  }

  const transaction = await sequelize.transaction();

  try {
    const hashedPassword = await hashPassword(userData.password);

    const user = await User.create(
      {
        ...userData,
        password: hashedPassword,
      },
      { transaction },
    );

    const account = await Account.create(
      {
        type: "corriente",
        balance: INITIAL_BALANCE,
        creditLine: INITIAL_BALANCE * 0.7,
        userId: user.id,
      },
      {
        transaction,
      },
    );

    await Movement.create(
      {
        type: "initial_balance",
        amount: INITIAL_BALANCE,
        description: "Saldo inicial de la cuenta",
        accountId: account.id,
      },
      { transaction },
    );

    await transaction.commit();

    return {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
    };
  } catch (error) {
    await transaction.rollback();

    throw error;
  }
};

export const login = async ({ email, password }) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    throw new ApiError(401, "Credenciales inválidas");
  }

  const passwordIsValid = await comparePassword(password, user.password);

  if (!passwordIsValid) {
    throw new ApiError(401, "Credenciales inválidas");
  }

  const token = generateToken({
    id: user.id,
    email: user.email,
  });

  return {
    token,
    user: {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
    },
  };
};
