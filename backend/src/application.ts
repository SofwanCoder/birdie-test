import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();
import express from "express";
import { router } from "./routes";
import errorHandler from "./middlewares/errorHandler";

const app = express();

app.use("/", router);

app.use(errorHandler);
export default app;
