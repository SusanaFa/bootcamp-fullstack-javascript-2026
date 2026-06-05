import { sequelize, User, Account, Movement } from "../src/models/index.js";
import { hashPassword } from "../src/utils/password.utils.js";
import { INITIAL_BALANCE } from "../src/config/env.js";

const seedDatabase = async () => {
  try {
    const usersCount = await User.count();

    if (usersCount > 0) {
      console.log("La base de datos ya tiene datos. Seed omitido.");
      return;
    }

    const password = await hashPassword("123456");

    const userOne = await User.create({
      fullName: "Ana Pérez",
      rut: "11111111-1",
      address: "Av. Principal 123",
      phone: "+56911111111",
      email: "ana@novabank.cl",
      password,
    });

    const userTwo = await User.create({
      fullName: "Luis González",
      rut: "22222222-2",
      address: "Calle Secundaria 456",
      phone: "+56922222222",
      email: "luis@novabank.cl",
      password,
    });

    const accountOne = await Account.create({
      type: "corriente",
      balance: INITIAL_BALANCE,
      creditLine: INITIAL_BALANCE * 0.7,
      userId: userOne.id,
    });

    const accountTwo = await Account.create({
      type: "ahorro",
      balance: INITIAL_BALANCE,
      creditLine: 0,
      userId: userTwo.id,
    });

    await Movement.bulkCreate([
      {
        type: "initial_balance",
        amount: INITIAL_BALANCE,
        description: "Saldo inicial de cuenta.",
        accountId: accountOne.id,
      },
      {
        type: "initial_balance",
        amount: INITIAL_BALANCE,
        description: "Saldo inicial de cuenta.",
        accountId: accountTwo.id,
      },
    ]);

    console.log("Datos iniciales insertados correctamente.");
    console.log("Usuario 1: ana@novabank.cl / 123456");
    console.log("Usuario 2: luis@novabank.cl / 123456");
  } catch (error) {
    console.error("Error al insertar datos iniciales:", error.message);
    throw error;
  } finally {
    await sequelize.close();
  }
};

seedDatabase();
