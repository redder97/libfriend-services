"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenizerFactory = exports.TokenizableTypes = void 0;
var TokenizableTypes;
(function (TokenizableTypes) {
    TokenizableTypes["PDF"] = "pdf";
    TokenizableTypes["TEXT"] = "text";
})(TokenizableTypes || (exports.TokenizableTypes = TokenizableTypes = {}));
class TokenizerFactory {
    constructor(tokenizerMap) {
        this.tokenizerMap = tokenizerMap;
    }
    static getInstance(tokenizerMap) {
        if (this.instance)
            return this.instance;
        this.instance = new TokenizerFactory(tokenizerMap);
        return this.instance;
    }
    getTokenizerService(type) {
        var _a;
        return (_a = this.tokenizerMap.get(type)) !== null && _a !== void 0 ? _a : null;
    }
}
exports.TokenizerFactory = TokenizerFactory;
