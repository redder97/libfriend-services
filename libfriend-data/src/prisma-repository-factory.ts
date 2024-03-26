import { IFileRepository, IRepositoryFactory, IUserRepository } from 'libfriend-core'
import { PrismaFileRepository, PrismaUserRepository } from './repository'
import { PrismaClient } from '@prisma/client'

export class PrismaRepositoryFactory implements IRepositoryFactory {
  private static instance: IRepositoryFactory

  private constructor(private client: PrismaClient) {}

  public static getInstance(): IRepositoryFactory {
    if (this.instance) return this.instance

    this.instance = new PrismaRepositoryFactory(new PrismaClient())
    return this.instance
  }

  get fileRepository(): IFileRepository {
    return new PrismaFileRepository(this.client)
  }

  get userRepository(): IUserRepository {
    return new PrismaUserRepository(this.client)
  }
}
