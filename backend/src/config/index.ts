import app from "./app";
import database from "./database";
import dir from "./dir";

const env = process.env.NODE_ENV || "development";
const port = process.env.PORT || 3000;

export const config = {
  env,
  port,
  app,
  database,
  dir,
};

export default config;
