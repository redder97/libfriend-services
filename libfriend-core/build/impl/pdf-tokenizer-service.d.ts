import { ITokenizerService } from '../services/tokenizer';
export declare class PDFTokenizerService implements ITokenizerService {
    tokenize(file: File): string;
}
