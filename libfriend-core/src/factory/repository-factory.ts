import { IFileRepository } from '../repository';

export interface IRepositoryFactory {
    fileRepository: IFileRepository
}