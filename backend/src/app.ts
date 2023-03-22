import "express-async-errors";
import "dotenv/config";
import express from "express";
import { clientRoutes } from "./routes/clientRoutes";
import "reflect-metadata";
import { errorHandler } from "./errors/errors";
import { loginRoute } from "./routes/loginRoute";

const app = express();
app.use(express.json());
app.use("/client", clientRoutes);
app.use("/login", loginRoute);
app.use(errorHandler);

export default app;
