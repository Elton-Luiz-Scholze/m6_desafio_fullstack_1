import "express-async-errors";
import "dotenv/config";
import express from "express";
import { clientRoutes } from "./routes/clientRoutes";
import "reflect-metadata";

const app = express();
app.use(express.json());
app.use("/client", clientRoutes);

export default app;
