import { ITokenizerService } from './services';
import { IUploaderService } from './services';

export class ServicesFactory {
    private static instance: ServicesFactory

    private constructor(
        private _tokenizerSerivce: ITokenizerService,
        private _uploaderService: IUploaderService
    ) {}

    public static getInstance(
        tokenizerService: ITokenizerService,
        uploaderService: IUploaderService
    ): ServicesFactory {

        if (this.instance) return this.instance

        return new ServicesFactory(
            tokenizerService,
            uploaderService
        )
    }

    get tokenizerService(): ITokenizerService {
        return this._tokenizerSerivce
    }

    get uploaderService(): IUploaderService {
        return this._uploaderService
    }


}