"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerVideo = void 0;
const express_1 = __importDefault(require("express"));
const seting_1 = require("../seting");
const validatio_1 = require("../validations/validatio");
const routerVideo = (db) => {
    const router = express_1.default.Router();
    router.get("/", (req, res) => {
        res.status(seting_1.SETTINGS.HTTPCOD.HTTPCOD_200).send(db.video);
    });
    router.post("/", (req, res) => {
        let validAvailableResolution = (0, validatio_1.inputValidation)(req.body);
        let valida = (0, validatio_1.validationTitleAuthor)(req.body);
        if (valida) {
            res.status(seting_1.SETTINGS.HTTPCOD.HTTPCOD_400).send(valida);
            return;
        }
        if (validAvailableResolution) {
            res.status(seting_1.SETTINGS.HTTPCOD.HTTPCOD_400).send(validAvailableResolution);
            return;
        }
        const newUser = {
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
        res.status(seting_1.SETTINGS.HTTPCOD.HTTPCOD_201).send(newUser);
    });
    router.get("/:id", (req, res) => {
        let result = db.video.find((v) => v.id === +req.params.id);
        if (!result) {
            res.sendStatus(seting_1.SETTINGS.HTTPCOD.HTTPCOD_404);
            return;
        }
        res.status(seting_1.SETTINGS.HTTPCOD.HTTPCOD_200).send(result);
    });
    router.put("/:id", (req, res) => {
        let result = db.video.find((v) => v.id === +req.params.id);
        if (!result) {
            res.sendStatus(seting_1.SETTINGS.HTTPCOD.HTTPCOD_404);
            return;
        }
        let valid = (0, validatio_1.createVideoConfdtroller)(req.body);
        if (valid) {
            res.status(seting_1.SETTINGS.HTTPCOD.HTTPCOD_400).send(valid);
            return;
        }
        (result.title = req.body.title), (result.author = req.body.author), (result.availableResolutions = req.body.availableResolutions);
        (result.minAgeRestriction = req.body.minAgeRestriction), (result.publicationDate = req.body.publicationDate);
        result.canBeDownloaded = req.body.canBeDownloaded;
        res.sendStatus(seting_1.SETTINGS.HTTPCOD.HTTPCOD_204);
    });
    router.delete("/:id", (req, res) => {
        let resultFind = db.video.find((v) => v.id === +req.params.id);
        db.video = db.video.filter((v) => v.id !== +req.params.id);
        if (!resultFind) {
            res.sendStatus(seting_1.SETTINGS.HTTPCOD.HTTPCOD_404);
            return;
        }
        res.sendStatus(seting_1.SETTINGS.HTTPCOD.HTTPCOD_204);
    });
    return router;
};
exports.routerVideo = routerVideo;
//# sourceMappingURL=routerVideos.js.map