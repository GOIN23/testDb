import { SETTINGS } from "../../src/seting";
import { videoT } from "../../src/type/typeVideos";
import { app } from "../../src/app";
import request from "supertest";
import { videoTestManager } from "../utilit/videotTestManager";

let testVideo: videoT;
describe("/test for users", () => {
  beforeAll(async () => {
    await request(app).delete("/api/testing/all-data").expect(204);
  });
  it("GET products = []", async () => {
    await request(app).get("/api/videos").expect([]);
  });
  it("- POST does not create the video with incorrect data (no title, no author)", async function () {
    await request(app)
      .post("/api/videos")
      .send({ title: "", author: "", availableResolutions: ["P140"] })
      .expect(SETTINGS.HTTPCOD.HTTPCOD_400, {
        errorsMessages: [
          { message: "error!!!!", field: "title" },
          { message: "error!!!!", field: "author" },
        ],
      });

    const result = await request(app).get("/videos/");
    expect(result.body).toEqual({});
  });
  it("- GET product by ID with incorrect id", async () => {
    await request(app).get("/api/videos/321312").expect(404);
  });
  it("+ creat post ", async () => {
    const respo = await videoTestManager.creatCourses();

    testVideo = respo.body;
  });
  it("+ GET product by ID with correct id", async () => {
    await request(app)
      .get("/api/videos/" + testVideo!.id)
      .expect(200, testVideo);
  });
  it("- PUT product by ID with incorrect data", async () => {
    await request(app)
      .put("/api/videos/" + 1223)
      .send({ title: "title", author: "title" })
      .expect(SETTINGS.HTTPCOD.HTTPCOD_404);

    const res = await request(app).get("/api/videos//");
    expect(res.body[0]).toEqual(testVideo);
  });
  it("+ PUT product by ID with correct data", async () => {
    await request(app)
      .put("/api/videos/" + testVideo!.id)
      .send({
        title: "ALI",
        author: "JASB",
        availableResolutions: ["P144"],
        canBeDownloaded: true,
        minAgeRestriction: 18,
        publicationDate: "2024-04-03T14:40:07.402Z",
      })
      .expect(SETTINGS.HTTPCOD.HTTPCOD_204);

    const res = await request(app).get("/api/videos/");
    expect(res.body[0]).toEqual({
      ...testVideo,
      title: "ALI",
      author: "JASB",
      availableResolutions: ["P144"],
      canBeDownloaded: true,
      minAgeRestriction: 18,
      publicationDate: "2024-04-03T14:40:07.402Z",
    });
    testVideo = res.body[0];
  });
  it("- DELETE product by incorrect ID", async () => {
    await request(app).delete("/api/videos/876328").expect(SETTINGS.HTTPCOD.HTTPCOD_404);

    const res = await request(app).get("/api/videos/");
    expect(res.body[0]).toEqual(testVideo);
  });
  it("+ DELETE product by correct ID, auth", async () => {
    await request(app)
      .delete("/api/videos/" + testVideo!.id)
      .expect(SETTINGS.HTTPCOD.HTTPCOD_204);

    const res = await request(app).get("/api/videos/");
    expect(res.body.length).toBe(0);
  });
});
