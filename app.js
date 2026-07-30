import express from "express";
import benefitsRouter from "./src/routes/benefitsRoute.js";
import budgetRouter from "./src/routes/budgetRoute.js";
import { errorHandler } from "./src/middlewares/errorHandler.js";

export const app = express();
app.use(express.json());

app.use("/soldiers", benefitsRouter);
app.use("/budget", budgetRouter);

app.use(errorHandler);
