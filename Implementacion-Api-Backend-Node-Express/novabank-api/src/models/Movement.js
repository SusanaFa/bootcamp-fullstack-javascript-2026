import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Movement = sequelize.define(
  "Movement",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    type: {
      type: DataTypes.ENUM(
        "initial_balance",
        "transfer_out",
        "transfer_in",
        "loan",
      ),
      allowNull: false,
    },

    amount: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  },
  {
    tableName: "movements",
    timestamps: true,
  },
);

export default Movement;
