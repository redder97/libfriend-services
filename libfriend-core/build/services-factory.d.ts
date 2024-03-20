import { ITokenizerService } from './services';
import { IUploaderService } from './services';
export declare class ServicesFactory {
    private _tokenizerSerivce;
    private _uploaderService;
    private static instance;
    private constructor();
    static getInstance(tokenizerService: ITokenizerService, uploaderService: IUploaderService): ServicesFactory;
    get tokenizerService(): ITokenizerService;
    get uploaderService(): IUploaderService;
}
