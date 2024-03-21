export enum FileTypes {
  PDF = 'pdf',
  TEXT = 'txt',
}

export interface IFile {
  filename: string
  type: FileTypes
}

export interface IAddFileInput extends IFile {
  ownerId: string
}

export interface IAddFileRequest extends IFile {}
