import express, { Router } from "express";
import EventHandler from "../handlers/EventHandler";

const router = express.Router();

router.get("/", [], EventHandler.handleGetEvents);

export const eventRoutes: Router = router;
