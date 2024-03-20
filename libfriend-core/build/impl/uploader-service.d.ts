import { TokenizerFactory } from '../factory';
import { IUploaderService, IUploadResult } from '../services/uploader';
export declare class UploaderService implements IUploaderService {
    private tokenizerFactory;
    constructor(tokenizerFactory: TokenizerFactory);
    upload(file: File): IUploadResult;
}
