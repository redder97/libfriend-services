import { PrismaRepositoryFactory } from 'libfriend-data';
import { ServicesFactory } from './services-factory';

let service: ServicesFactory

export function initializeContainer() {
  if (service) throw new Error('ServiceFactory has already been initialized')

  service = ServicesFactory.getInstance(PrismaRepositoryFactory.getInstance())
}

export { service }
