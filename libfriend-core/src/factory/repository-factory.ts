import { IFileRepository, IUserRepository } from '../repository'

export interface IRepositoryFactory {
  fileRepository: IFileRepository
  userRepository: IUserRepository
}
