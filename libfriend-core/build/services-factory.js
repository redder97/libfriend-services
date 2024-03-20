"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesFactory = void 0;
const factory_1 = require("./factory");
const impl_1 = require("./impl");
class ServicesFactory {
    constructor(_uploaderService) {
        this._uploaderService = _uploaderService;
    }
    static getInstance(uploaderService) {
        if (this.instance)
            return this.instance;
        this.instance = new ServicesFactory(uploaderService);
        return this.instance;
    }
    get uploaderService() {
        var _a;
        return (_a = this._uploaderService) !== null && _a !== void 0 ? _a : new impl_1.UploaderService(this.tokenizerFactory);
    }
    get tokenizerFactory() {
        const map = new Map([
            [
                factory_1.TokenizableTypes.PDF,
                this.pdfTokenizerService
            ],
            [
                factory_1.TokenizableTypes.TEXT,
                this.textTokenizerService
            ]
        ]);
        return factory_1.TokenizerFactory.getInstance(map);
    }
    get pdfTokenizerService() {
        return new impl_1.PDFTokenizerService();
    }
    get textTokenizerService() {
        return new impl_1.TextTokenizerService();
    }
}
exports.ServicesFactory = ServicesFactory;
