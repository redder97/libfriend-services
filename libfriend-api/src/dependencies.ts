import { ServicesFactory, TokenizerService, UploaderService } from 'libfriend-core'

let service: ServicesFactory

export function initializeContainer() {
    if (service) throw new Error('ServiceFactory has already been initialized')

    service = ServicesFactory.getInstance(
        new TokenizerService(),
        new UploaderService()
    )
}

export {
    service
}
