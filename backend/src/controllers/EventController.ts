import { Route, SuccessResponse, Tags, Get, Query } from "tsoa";
import EventService from "../services/EventService";
import { success } from "../utils/response";

@Route("/events")
@Tags("Event")
class EventController {
  @SuccessResponse("201", "Bad Request")
  @Get()
  public static async getEventsController(
    @Query() per_page = 20,
    @Query() page = 1
  ) {
    return success(
      await EventService.getEvents({
        per_page,
        page,
      })
    );
  }
}

export default EventController;
