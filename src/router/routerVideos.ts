import express, { Request, Response } from "express";
import { CreateVideoInputModel, dbT, videoT } from "../type/typeVideos";
import { SETTINGS } from "../seting";
import { createVideoConfdtroller, inputValidation, validationTitleAuthor } from "../validations/validatio";

export const routerVideo = (db: dbT) => {
  const router = express.Router();

  router.get("/", (req: Request, res: Response) => {
    res.status(SETTINGS.HTTPCOD.HTTPCOD_200).send(db.video);
  });

  router.post("/", (req: Request<{}, {}, CreateVideoInputModel, {}>, res: Response) => {
    let validAvailableResolution = inputValidation(req.body);
    let valida = validationTitleAuthor(req.body);
    if (valida) {
      res.status(SETTINGS.HTTPCOD.HTTPCOD_400).send(valida);
      return;
    }

    if (validAvailableResolution) {
      res.status(SETTINGS.HTTPCOD.HTTPCOD_400).send(validAvailableResolution);
      return;
    }

    const newUser: videoT = {
      id: +new Date(),
      title: req.body.title,
      author: req.body.author,
      canBeDownloaded: false,
      minAgeRestriction: null,
      createdAt: new Date().toISOString(),
      publicationDate: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString(),
      availableResolutions: req.body.availableResolutions,
    };

    db.video.push(newUser);
    res.status(SETTINGS.HTTPCOD.HTTPCOD_201).send(newUser);
  });

  router.get("/:id", (req: Request, res: Response) => {
    let result = db.video.find((v) => v.id === +req.params.id);

    if (!result) {
      res.sendStatus(SETTINGS.HTTPCOD.HTTPCOD_404);
      return;
    }

    res.status(SETTINGS.HTTPCOD.HTTPCOD_200).send(result);
  });

  router.put("/:id", (req: Request, res: Response) => {
    let result = db.video.find((v) => v.id === +req.params.id);

    if (!result) {
      res.sendStatus(SETTINGS.HTTPCOD.HTTPCOD_404);
      return;
    }

    let valid = createVideoConfdtroller(req.body);

    if (valid) {
      res.status(SETTINGS.HTTPCOD.HTTPCOD_400).send(valid);
      return;
    }

    (result.title = req.body.title), (result.author = req.body.author), (result.availableResolutions = req.body.availableResolutions);
    (result.minAgeRestriction = req.body.minAgeRestriction), (result.publicationDate = req.body.publicationDate);
    result.canBeDownloaded = req.body.canBeDownloaded;

    res.sendStatus(SETTINGS.HTTPCOD.HTTPCOD_204);
  });

  router.delete("/:id", (req: Request, res: Response) => {
    let resultFind = db.video.find((v) => v.id === +req.params.id);
    db.video = db.video.filter((v) => v.id !== +req.params.id);

    if (!resultFind) {
      res.sendStatus(SETTINGS.HTTPCOD.HTTPCOD_404);
      return;
    }

    res.sendStatus(SETTINGS.HTTPCOD.HTTPCOD_204);
  });
  return router;
};
