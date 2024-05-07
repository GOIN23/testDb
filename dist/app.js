"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.db = void 0;
const express_1 = __importDefault(require("express"));
const routerVideos_1 = require("./router/routerVideos");
const typeVideos_1 = require("./type/typeVideos");
const routerDelet_1 = require("./router/routerDelet");
exports.db = {
    video: [
        {
            id: 1,
            title: "ali",
            author: "dsa",
            canBeDownloaded: false,
            minAgeRestriction: null,
            createdAt: new Date().toISOString(),
            publicationDate: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString(),
            availableResolutions: [typeVideos_1.videoQuality.a144],
        },
    ],
};
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use("/api/videos", (0, routerVideos_1.routerVideo)(exports.db));
exports.app.use("/api/testing/all-data", (0, routerDelet_1.routerDelet)(exports.db));
//# sourceMappingURL=app.js.map