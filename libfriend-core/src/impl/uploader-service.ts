import { TokenizableTypes, TokenizerFactory } from '../factory'
import { IUploaderService, IUploadResult } from '../services/uploader'

export class UploaderService implements IUploaderService {
  constructor(private tokenizerFactory: TokenizerFactory) {}

  upload(file: File): IUploadResult {
    this.tokenizerFactory
      .getTokenizerService(TokenizableTypes.PDF)!
      .tokenize(file)
    return {}
  }
}
