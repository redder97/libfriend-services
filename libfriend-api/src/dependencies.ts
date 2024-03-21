import { ServicesFactory } from 'libfriend-core'

let service: ServicesFactory

export function initializeContainer() {
  if (service) throw new Error('ServiceFactory has already been initialized')

  service = ServicesFactory.getInstance()
}

export { service }
