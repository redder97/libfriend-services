import { PrismaClient } from '@prisma/client';
import { IFileRepository, IAddFileInput } from "libfriend-core"

export class PrismaFileRepository implements IFileRepository {

    constructor(private client: PrismaClient) {}
    
    async addFiles(fileInput: IAddFileInput[]): Promise<string[]> {
        const ids = await Promise.all(fileInput.map(async (file) => {
            const createdFile = await this.client.file.create({
                data: file
            })

            return createdFile.id
        }));
        
        return ids
    }

}