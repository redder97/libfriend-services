"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.service = exports.initializeContainer = void 0;
const libfriend_core_1 = require("libfriend-core");
let service;
function initializeContainer() {
    if (service)
        throw new Error('ServiceFactory has already been initialized');
    exports.service = service = libfriend_core_1.ServicesFactory.getInstance(new libfriend_core_1.TokenizerService(), new libfriend_core_1.UploaderService());
}
exports.initializeContainer = initializeContainer;
