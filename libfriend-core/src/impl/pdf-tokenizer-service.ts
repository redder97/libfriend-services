import { ITokenizerService } from '../services/tokenizer';

export class PDFTokenizerService implements ITokenizerService {

    tokenize(file: File): string {
        throw new Error('Method not implemented. (PDF)');
    }

}