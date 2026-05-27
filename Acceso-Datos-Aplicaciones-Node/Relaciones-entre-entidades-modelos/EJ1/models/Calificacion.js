//models/Calificacion.js
import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Calificacion = sequelize.define(
  "Calificacion",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    alumno_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nota: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING(100),
      //este campo puede ser opcional
      allowNull: true,
    },
  },
  {
    tableName: "calificaciones",
    timestamps: false,
  },
);
