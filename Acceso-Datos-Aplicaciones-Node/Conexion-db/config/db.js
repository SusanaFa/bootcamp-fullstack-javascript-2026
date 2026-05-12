//config/db.js
import pg from "pg";
import "dotenv/config";

const { Pool } = pg;

// console.log("DB_PASSWORD", process.env.DB_PASSWORD);
// console.log("tipo", typeof process.env.DB_PASSWORD);

export const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

//Este archivo prepara la conexión con postgreSQL.
