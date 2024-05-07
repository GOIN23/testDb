import express, { Request, Response } from "express";
import { dbT } from "../type/typeVideos";

export const routerDelet = (db: dbT) => {
  const router = express.Router();

  router.delete("/", (req: Request, res: Response) => {
    db.video = [];
    res.sendStatus(204);
  });

  return router;
};
