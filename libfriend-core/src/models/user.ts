export enum Providers {
    GOOGLE = 'google'
} 

export interface IRegistrationRequest {
    name: string,
    username?: string,
    password?: string,
    email: string,
    provider: Providers
}

export interface IUser {
    email: string
    id: string
    provider: Providers
}

export type GenericResponse<T> = {
    success: boolean,
    data?: T,
    message?: string
}