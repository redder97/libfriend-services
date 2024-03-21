import { IAddFileInput } from '../models'

export interface IFileRepository {
  addFiles(fileInput: IAddFileInput[]): Promise<string[]>
}
