import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";
import "dotenv/config";
import "reflect-metadata";

const port = process.env.PG_PORT as number | undefined;

const setDataSourceOptions = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationPath: string = path.join(__dirname, "./migrations/**.{ts,js}");

  const nodeEnv = process.env.NODE_ENV;
  if (nodeEnv === "production") {
    return {
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities: [entitiesPath],
      migrations: [migrationPath],
    };
  }
  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [entitiesPath],
    };
  }
  return {
    type: "postgres",
    host: process.env.PG_HOST,
    port: port,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB,
    logging: true,
    synchronize: false,
    entities: [entitiesPath],
    migrations: [migrationPath],
  };
};
const dataSourceOptions = setDataSourceOptions();
export const AppDataSource = new DataSource(dataSourceOptions);
