import { Providers } from 'libfriend-core';

export type GoogleProfile = {
    email: string,
    id: string,
    name: string,
    given_name: string,
    family_name: string,
    picture: string,
    locale: string,
}

export class GoogleRegistration  {
    email: string;
    providerId: string;
    provider = Providers.GOOGLE;
    name: string


    constructor(profile: GoogleProfile) {
        this.email = profile.email;
        this.providerId = profile.id;
        this.name = profile.name;
    }

}

export type JWTpayload = {
    id: string,
    email: string,
}