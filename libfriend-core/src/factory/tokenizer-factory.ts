import { ITokenizerService } from '../services';

export enum TokenizableTypes {
    PDF = 'pdf', TEXT = 'text'
}

export class TokenizerFactory {
    private static instance: TokenizerFactory

    private constructor(private tokenizerMap: Map<TokenizableTypes, ITokenizerService>) {}

    public static getInstance(tokenizerMap: Map<TokenizableTypes, ITokenizerService>): TokenizerFactory {
        if (this.instance) return this.instance
        
        this.instance = new TokenizerFactory(tokenizerMap)

        return this.instance
    }

    getTokenizerService(type: TokenizableTypes): ITokenizerService | null {
        return this.tokenizerMap.get(type) ?? null
    } 
}