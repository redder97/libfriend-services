import { IAddFileRequest } from '../models'

export interface IUploadResult {
  errors?: string[]
}

export interface IUploaderService {
  upload(files: IAddFileRequest[]): Promise<IUploadResult>
}
