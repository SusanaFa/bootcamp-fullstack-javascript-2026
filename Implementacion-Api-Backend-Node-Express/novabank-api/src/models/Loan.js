import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Loan = sequelize.define(
  "Loan",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    amount: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
    },

    installments: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM("approved"),
      allowNull: false,
      defaultValue: "approved",
    },
  },
  {
    tableName: "loans",
    timestamps: true,
  },
);

export default Loan;
