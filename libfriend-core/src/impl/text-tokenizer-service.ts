import { ITokenizerService } from '../services/tokenizer'

export class TextTokenizerService implements ITokenizerService {
  tokenize(file: File): string {
    throw new Error('Method not implemented.')
  }
}
