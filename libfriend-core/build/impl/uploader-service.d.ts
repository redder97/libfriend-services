import { IUploaderService, IUploadResult } from '../services/uploader';
export declare class UploaderService implements IUploaderService {
    upload(file: File): IUploadResult;
}
