import { TokenizableTypes, TokenizerFactory } from './factory'
import {
  PDFTokenizerService,
  TextTokenizerService,
  UploaderService,
} from './impl'
import { ITokenizerService } from './services'
import { IUploaderService } from './services'

export class ServicesFactory {
  private static instance: ServicesFactory

  private constructor(private _uploaderService?: IUploaderService) {}

  public static getInstance(
    uploaderService?: IUploaderService,
  ): ServicesFactory {
    if (this.instance) return this.instance

    this.instance = new ServicesFactory(uploaderService)

    return this.instance
  }

  get uploaderService(): IUploaderService {
    return this._uploaderService ?? new UploaderService(this.tokenizerFactory)
  }

  get tokenizerFactory(): TokenizerFactory {
    const map = new Map([
      [TokenizableTypes.PDF, this.pdfTokenizerService],
      [TokenizableTypes.TEXT, this.textTokenizerService],
    ])

    return TokenizerFactory.getInstance(map)
  }

  get pdfTokenizerService(): ITokenizerService {
    return new PDFTokenizerService()
  }

  get textTokenizerService(): ITokenizerService {
    return new TextTokenizerService()
  }
}
