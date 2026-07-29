import express from "express";
import benefitsRouter from "./src/routes/benefitsRoute.js";

export const app = express();
app.use(express.json());

app.use("/soldiers", benefitsRouter);
