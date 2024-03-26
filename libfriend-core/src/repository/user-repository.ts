import { GenericResponse, IRegistrationRequest, IUser, Providers } from '../models';

export interface IUserRepository {
    addUser(addUserRequest: IRegistrationRequest): Promise<GenericResponse<IUser>>
    findByEmail(email: string): Promise<IUser | null>
}