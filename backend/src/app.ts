import "express-async-errors";
import "dotenv/config";
import express from "express";
import { clientRoutes } from "./routes/clientRoutes";
import "reflect-metadata";
import { errorHandler } from "./errors/errors";
import { loginRoute } from "./routes/loginRoute";
import { contactRoutes } from "./routes/contactRoutes";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/client", clientRoutes);
app.use("/contact", contactRoutes);
app.use("/login", loginRoute);

app.use(errorHandler);

export default app;
