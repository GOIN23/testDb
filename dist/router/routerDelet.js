"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerDelet = void 0;
const express_1 = __importDefault(require("express"));
const routerDelet = (db) => {
    const router = express_1.default.Router();
    router.delete("/", (req, res) => {
        db.video = [];
        res.sendStatus(204);
    });
    return router;
};
exports.routerDelet = routerDelet;
//# sourceMappingURL=routerDelet.js.map