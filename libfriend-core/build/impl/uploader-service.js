"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploaderService = void 0;
const factory_1 = require("../factory");
class UploaderService {
    constructor(tokenizerFactory) {
        this.tokenizerFactory = tokenizerFactory;
    }
    upload(file) {
        this.tokenizerFactory.getTokenizerService(factory_1.TokenizableTypes.PDF).tokenize(file);
        return {};
    }
}
exports.UploaderService = UploaderService;
