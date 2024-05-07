"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationTitleAuthor = exports.createVideoConfdtroller = exports.inputValidation = void 0;
const typeVideos_1 = require("../type/typeVideos");
function Alids(arr1, arr2) {
    for (let a = 0; a < arr2.length; a++) {
        let resul = arr1.includes(arr2[a]);
        if (resul) {
            continue;
        }
        else {
            return null;
        }
    }
    return "ok";
}
const inputValidation = (video) => {
    let resul = Alids(typeVideos_1.arrvideo, video.availableResolutions);
    const errors = {
        errorsMessages: [],
    };
    if (!Array.isArray(video.availableResolutions) || video.availableResolutions.length == 0 || !resul) {
        errors.errorsMessages.push({
            message: "error!!!!",
            field: "availableResolutions",
        });
        return errors;
    }
    return null;
};
exports.inputValidation = inputValidation;
const createVideoConfdtroller = (video) => {
    const errors = {
        errorsMessages: [],
    };
    if (typeof video.title !== "string" || video.title.length == 0 || video.title.length > 40) {
        errors.errorsMessages.push({
            message: "error!!!!",
            field: "title",
        });
    }
    if (typeof video.author !== "string" || video.author.length == 0 || video.author.length > 20) {
        errors.errorsMessages.push({
            message: "error!!!!",
            field: "author",
        });
    }
    if (typeof video.minAgeRestriction !== "number" || video.minAgeRestriction > 18 || video.minAgeRestriction < 1 || !video.minAgeRestriction) {
        if (video.minAgeRestriction === null) {
            ("");
        }
        else {
            errors.errorsMessages.push({
                message: "error!!!!",
                field: "minAgeRestriction",
            });
        }
    }
    if (typeof video.canBeDownloaded !== "boolean") {
        errors.errorsMessages.push({
            message: "error!!!!",
            field: "canBeDownloaded",
        });
    }
    if ((0, exports.inputValidation)(video)) {
        errors.errorsMessages.push({
            message: "error!!!!",
            field: "availableResolutions",
        });
    }
    if (typeof video.publicationDate != "string") {
        errors.errorsMessages.push({
            message: "error!!!!",
            field: "publicationDate",
        });
    }
    if (errors.errorsMessages.length != 0) {
        return errors;
    }
    else {
        return null;
    }
};
exports.createVideoConfdtroller = createVideoConfdtroller;
const validationTitleAuthor = (video) => {
    const errors = {
        errorsMessages: [],
    };
    if (typeof video.title !== "string" || video.title.length == 0 || video.title.length > 40) {
        errors.errorsMessages.push({
            message: "error!!!!",
            field: "title",
        });
    }
    if (typeof video.author !== "string" || video.author.length == 0 || video.author.length > 20) {
        errors.errorsMessages.push({
            message: "error!!!!",
            field: "author",
        });
    }
    if (errors.errorsMessages.length != 0) {
        return errors;
    }
    else {
        return null;
    }
};
exports.validationTitleAuthor = validationTitleAuthor;
//# sourceMappingURL=validatio.js.map