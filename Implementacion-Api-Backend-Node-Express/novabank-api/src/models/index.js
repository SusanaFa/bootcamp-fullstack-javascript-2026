import sequelize from "../config/database.js";

import User from "./User.js";
import Account from "./Account.js";
import Transfer from "./Transfer.js";
import Movement from "./Movement.js";
import Loan from "./Loan.js";

//1:N
//Un usuario puede tener muchas cuentas
User.hasMany(Account, {
  foreignKey: {
    name: "userId",
    allowNull: false,
  },
  as: "accounts",
});

//Una cuenta pertenece a un usuario
//1:1
Account.belongsTo(User, {
  foreignKey: {
    name: "userId",
    allowNull: false,
  },
  as: "user",
});

//1:N
//Una cuenta puede tener muchos movimientos
Account.hasMany(Movement, {
  foreignKey: {
    name: "accountId",
    allowNull: false,
  },
  as: "movements",
});

//1:1
//Un movimiento pertenece a una cuenta
Movement.belongsTo(Account, {
  foreignKey: {
    name: "accountId",
    allowNull: false,
  },
  as: "account",
});

//1:N
//Una transferencia tiene una cuenta de origen y una cuenta de destino
Account.hasMany(Transfer, {
  foreignKey: {
    name: "originAccountId",
    allowNull: false,
  },
  as: "sendTransfers",
});

Account.hasMany(Transfer, {
  foreignKey: {
    name: "destinationAccountId",
    allowNull: false,
  },
  as: "receivedTransfers",
});

Transfer.belongsTo(Account, {
  foreignKey: {
    name: "originAccountId",
    allowNull: false,
  },
  as: "originAccount",
});

Transfer.belongsTo(Account, {
  foreignKey: {
    name: "destinationAccountId",
    allowNull: false,
  },
  as: "destinationAccount",
});

//una transferencia puede generar movimientos
//1:N

Transfer.hasMany(Movement, {
  foreignKey: {
    name: "transferId",
    allowNull: true,
  },
  as: "movimients",
});

Movement.belongsTo(Transfer, {
  foreignKey: {
    name: "transferId",
    allowNull: true,
  },
  as: "transfer",
});

//un préstamo puede generar movimientos
//1:N
Loan.hasMany(Movement, {
  foreignKey: {
    name: "loanId",
    allowNull: true,
  },
  as: "movimients",
});

Movement.belongsTo(Loan, {
  foreignKey: {
    name: "loanId",
    allowNull: true,
  },
  as: "loan",
});

export { sequelize, User, Account, Transfer, Movement, Loan };
