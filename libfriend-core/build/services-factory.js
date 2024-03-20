"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesFactory = void 0;
class ServicesFactory {
    constructor(_tokenizerSerivce, _uploaderService) {
        this._tokenizerSerivce = _tokenizerSerivce;
        this._uploaderService = _uploaderService;
    }
    static getInstance(tokenizerService, uploaderService) {
        if (this.instance)
            return this.instance;
        return new ServicesFactory(tokenizerService, uploaderService);
    }
    get tokenizerService() {
        return this._tokenizerSerivce;
    }
    get uploaderService() {
        return this._uploaderService;
    }
}
exports.ServicesFactory = ServicesFactory;
