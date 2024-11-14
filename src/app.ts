import express from "express";
import { routerDelet } from "./router/routerDelet";
import { routerVideo } from "./router/routerVideos";
import { dbT, videoQuality } from "./type/typeVideos";

export const db: dbT = {
  video: [
    {
      id: 1,
      title: "ali",
      author: "dsa",
      canBeDownloaded: false,
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

console.log('new branch dev')

console.log('create commint 2')
console.log('create commint 3')

console.log('create commint 4')

console.log('develepment/auth 1')