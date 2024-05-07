import { app } from "../../src/app";
import { SETTINGS } from "../../src/seting";
import request from "supertest";

export const videoTestManager = {
  async creatCourses() {
    const respo = await request(app)
      .post("/api/videos")
      .send({ title: "alfsdfsi", author: "dsada", availableResolutions: ["P144"] })
      .expect(SETTINGS.HTTPCOD.HTTPCOD_201);

      return respo
  },
};
