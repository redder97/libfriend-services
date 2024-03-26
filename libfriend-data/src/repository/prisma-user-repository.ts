import { PrismaClient } from '@prisma/client';
import { GenericResponse, IRegistrationRequest, IUser, IUserRepository, Providers } from 'libfriend-core';

export class PrismaUserRepository implements IUserRepository {

    constructor(private client: PrismaClient) {}

    async addUser(addUserRequest: IRegistrationRequest): Promise<GenericResponse<IUser>> {
        const { email, provider, name } = addUserRequest

        if (provider !== Providers.GOOGLE) throw new Error(`Provider not yet supported: ${provider}`)

        const createdUser = await this.client.user.create({
            data: {
                email,
                provider,
                name
            }
        })

        return {
            success: true,
            data: (createdUser as IUser),
        }
    }

    async findByEmail(email: string): Promise<IUser | null> {
        const user = await this.client.user.findFirst({
            where: {
                email
            }
        })

        if (!user) return null

        return (<IUser> user)
    }

}