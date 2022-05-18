import express, { Router } from "express";
import swaggerUi, { JsonObject } from "swagger-ui-express";
import config from "../../config";
const router = express.Router();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const docs = require(`${config.dir.root}/swagger.json`) as JsonObject;

router.use("/", swaggerUi.serve, swaggerUi.setup(docs));

router.get("/json", (_req, res) => {
  return res.send(docs);
});

export const routerDocs: Router = router;
