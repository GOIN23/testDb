"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SETTINGS = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)(); // добавление переменных из файла .env в process.env
exports.SETTINGS = {
    // все хардкодные значения должны быть здесь, для удобства их изменения
    PORT: process.env.PORT || 3004,
    PATH: {
        VIDEOS: "/api/videos",
    },
    HTTPCOD: {
        HTTPCOD_200: 200,
        HTTPCOD_201: 201,
        HTTPCOD_400: 400,
        HTTPCOD_404: 404,
        HTTPCOD_204: 204,
    },
};
//# sourceMappingURL=seting.js.map