import { ServicesFactory } from 'libfriend-core'
import { PrismaRepositoryFactory } from 'libfriend-data'

let service: ServicesFactory

export function initializeContainer() {
  if (service) throw new Error('ServiceFactory has already been initialized')

  service = ServicesFactory.getInstance(PrismaRepositoryFactory.getInstance())
}

export { service }
