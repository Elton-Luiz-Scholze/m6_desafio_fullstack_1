import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

const port = process.env.PG_PORT as number | undefined;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.PG_HOST,
  port: port,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DB,
});
