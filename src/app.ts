import express from "express";
import { routerVideo } from "./router/routerVideos";
import { dbT, videoQuality, videoT } from "./type/typeVideos";
import { SETTINGS } from "./seting";
import { routerDelet } from "./router/routerDelet";

export const db: dbT = {
  video: [
    {
      id: 1,
      title: "ali",
      author: "dsa",
      canBeDownloaded: false ,
      minAgeRestriction: null,
      createdAt: new Date().toISOString(),
      publicationDate: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString(),
      availableResolutions: [videoQuality.a144],
    },
  ],
};

export const app = express();

app.use(express.json());
app.use("/api/videos", routerVideo(db));
app.use("/api/testing/all-data", routerDelet(db));

