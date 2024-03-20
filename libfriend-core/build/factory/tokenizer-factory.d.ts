import { ITokenizerService } from '../services';
export declare enum TokenizableTypes {
    PDF = "pdf",
    TEXT = "text"
}
export declare class TokenizerFactory {
    private tokenizerMap;
    private static instance;
    private constructor();
    static getInstance(tokenizerMap: Map<TokenizableTypes, ITokenizerService>): TokenizerFactory;
    getTokenizerService(type: TokenizableTypes): ITokenizerService | null;
}
