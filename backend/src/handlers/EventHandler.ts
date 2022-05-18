import { NextFunction, Request, Response } from "express";
import { respond } from "../utils/response";
import EventController from "../controllers/EventController";

class EventHandler {
  public static async handleGetEvents(
    this: void,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const response = await EventController.getEventsController(
        Number(req.query.per_page || 20),
        Number(req.query.page || 1)
      );
      respond(res, response);
    } catch (error) {
      next(error);
    }
  }
}

export default EventHandler;
