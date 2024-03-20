import { ITokenizerService } from '../services/tokenizer';

export class TokenizerService implements ITokenizerService {

    tokenize(file: File): string {
        throw new Error('Method not implemented.');
    }

}