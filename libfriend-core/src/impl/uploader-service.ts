import { IUploaderService, IUploadResult } from '../services/uploader';

export class UploaderService implements IUploaderService {
    upload(file: File): IUploadResult {
        throw new Error('Method not implemented.');
    }

}