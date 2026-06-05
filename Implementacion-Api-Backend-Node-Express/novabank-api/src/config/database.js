import { Sequelize } from "sequelize";
import { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } from "./env.js";

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "postgres",
  logging: false,
});

export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexion a PostgreSQL establecida correctamente");
  } catch (error) {
    console.error(`Error al conectar con PostgreSQL: ${error.message}`);
    throw error;
  }
};

export default sequelize;
