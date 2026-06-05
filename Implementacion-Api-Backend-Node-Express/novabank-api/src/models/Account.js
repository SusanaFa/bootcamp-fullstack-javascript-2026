import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Account = sequelize.define(
  "Account",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    type: {
      type: DataTypes.ENUM("corriente", "ahorro"),
      allowNull: false,
    },

    balance: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
      defaultValue: 0,
    },

    creditLine: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "accounts",
    timestamps: true,
  },
);

export default Account;
