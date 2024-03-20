"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("../dependencies");
const upload_routes_1 = __importDefault(require("./controllers/upload-routes"));
const app = (0, express_1.default)();
(0, dependencies_1.initializeContainer)();
app.use('/api/v1', upload_routes_1.default);
app.listen(5000, () => {
    console.log('listening on port 5000');
});
