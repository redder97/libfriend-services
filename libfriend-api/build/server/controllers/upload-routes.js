"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("../../dependencies");
const uploadRouter = express_1.default.Router();
uploadRouter.post('/upload', (req, res) => {
    dependencies_1.service.uploaderService.upload(new File([], 'test'));
    return {};
});
exports.default = uploadRouter;
