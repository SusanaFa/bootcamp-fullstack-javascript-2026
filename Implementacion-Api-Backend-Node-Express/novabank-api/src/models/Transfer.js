import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Transfer = sequelize.define(
  "Transfer",
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

    comment: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
  },
  {
    tableName: "transfers",
    timestamps: true,
  },
);

export default Transfer;
