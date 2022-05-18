import app from "../src/application";
import request from "supertest";
import { sequelize } from "../src/sequelize";

jest.setTimeout(30000);
beforeAll(async () => {
  await sequelize.authenticate();
});

afterAll(async () => {
  await sequelize.close();
});

describe("Describe events", () => {
  it("should get 100 events", async () => {
    await request(app)
      .get("/events")
      .expect(200)
      .expect(function (res) {
        expect(res.body.data.records.length).toEqual(20);
      });
  });
  it("should get N events", async () => {
    const PER_PAGE = 10;
    await request(app)
      .get(`/events?per_page=${PER_PAGE}`)
      .expect(200)
      .expect(function (res) {
        expect(res.body.data.records.length).toEqual(PER_PAGE);
      });
  });
});
