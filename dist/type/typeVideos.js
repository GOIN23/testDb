"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrvideo = exports.videoQuality = void 0;
var videoQuality;
(function (videoQuality) {
    videoQuality["a144"] = "P144";
    videoQuality["a240"] = "P240";
    videoQuality["a360"] = "P360";
    videoQuality["a480"] = "P480";
    videoQuality["a720"] = "P720";
    videoQuality["a1080"] = "P1080";
    videoQuality["a1440"] = "P1440";
    videoQuality["a2160"] = "P2160";
})(videoQuality || (exports.videoQuality = videoQuality = {}));
exports.arrvideo = [
    videoQuality.a1080,
    videoQuality.a144,
    videoQuality.a1440,
    videoQuality.a2160,
    videoQuality.a240,
    videoQuality.a360,
    videoQuality.a480,
    videoQuality.a720,
];
//# sourceMappingURL=typeVideos.js.map