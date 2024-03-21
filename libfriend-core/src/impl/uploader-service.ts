import { IRepositoryFactory, TokenizerFactory } from '../factory'
import { IAddFileInput, IAddFileRequest } from '../models';
import { IUploaderService, IUploadResult } from '../services/uploader'

export class UploaderService implements IUploaderService {
  constructor(
    private repositoryFactory: IRepositoryFactory,
    private tokenizerFactory: TokenizerFactory
  ) {}

  async upload(files: IAddFileRequest[]): Promise<IUploadResult> {
    const uploadedIds = await this.repositoryFactory.fileRepository.addFiles(files.map<IAddFileInput>((fileRequest) => ({
      ...fileRequest,
      ownerId: 'red',
    })))

    console.log(uploadedIds)

    return {}
  }
}
