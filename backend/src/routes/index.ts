import express from "express";
import { routerDocs } from "./docs";
import { eventRoutes } from "./event.routes";
import { pingController } from "./ping";

export const router = express.Router();

router.use("/events", eventRoutes);
router.use("/docs", routerDocs);
router.use(pingController);
