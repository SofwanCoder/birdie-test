import { Event } from "../models/Event";
import { QueryPayload } from "../types/payload";

export default class EventService {
  public static async getEvents(query: QueryPayload) {
    const per_page = query.per_page ? Number(query.per_page) : 20;
    const page = query.page ? Number(query.page) : 1;
    const offset = per_page * (Math.abs(page) - 1);

    const events = await Event.findAndCountAll({
      limit: per_page,
      offset,
      attributes: [
        "id",
        "event_type",
        "visit_id",
        "care_recipient_id",
        "caregiver_id",
        "alert_id",
        "timestamp",
      ],
      order: [["timestamp", "DESC"]],
    });

    return {
      records: events.rows,
      meta: {
        total: events.count,
        current_page: 1,
        per_page: per_page,
      },
    };
  }
}
