import { TokenizerFactory } from './factory';
import { ITokenizerService } from './services';
import { IUploaderService } from './services';
export declare class ServicesFactory {
    private _uploaderService?;
    private static instance;
    private constructor();
    static getInstance(uploaderService?: IUploaderService): ServicesFactory;
    get uploaderService(): IUploaderService;
    get tokenizerFactory(): TokenizerFactory;
    get pdfTokenizerService(): ITokenizerService;
    get textTokenizerService(): ITokenizerService;
}
