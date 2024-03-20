export interface IUploadResult {
    errors: string[]
}

export interface IUploaderService {
    upload(file: File): IUploadResult
}