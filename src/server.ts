import express from "express";
import swaggerUi from "swagger-ui-express";
import "reflect-metadata";

import { Routes } from "./routes";
import swaggerFile from "./swagger.json";
import "./database";
import "./shared/container";

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(Routes);
app.listen(3333, () => console.log("Server is Running!"));
