import { OAuth2Client } from 'google-auth-library'
import { GoogleProfile, GoogleRegistration } from '../models/google'
import {
  GenericResponse,
  IUser,
  IUserRepository,
  Providers,
} from 'libfriend-core'
import auth from '../util/auth';
import config from '../config';

export class GoogleAuthService {
  private readonly scopes =
    ['https://www.googleapis.com/auth/userinfo.email','https://www.googleapis.com/auth/userinfo.profile']

  constructor(
    private oauth2ClientInstance: OAuth2Client,
    private userRepository: IUserRepository
  ) {}

  generateAuthorizationUrl() {
    return this.oauth2ClientInstance.generateAuthUrl({
      access_type: 'offline',
      scope: this.scopes,
      include_granted_scopes: true,
    })
  }

  getOauth2Client() {
    return this.oauth2ClientInstance
  }

  private async registerOrLoginWithGoogle(
    registration: GoogleRegistration
  ): Promise<GenericResponse<IUser>> {
    const { email } = registration

    const user = await this.userRepository.findByEmail(email)

    if (user && user?.provider !== Providers.GOOGLE) {
      throw Error('Email is already registered outside of Google Login')
    }

    if (user && user.provider === Providers.GOOGLE) {
      return {
        success: true,
        data: user,
      }
    }

    if (!user) {
      try {
        const createdUser = await this.userRepository.addUser(registration)

        return createdUser
      } catch (err: any) {
        throw err
      }
    }

    return {
      success: false,
    }
  }

  async handleGoogleProfile(
    googleProfile: GoogleProfile
  ): Promise<{ token: string }> {
    const result = await this.registerOrLoginWithGoogle(
      new GoogleRegistration(googleProfile)
    )
    
    return { token: auth.signJWT({ id: result.data!.id, email: result.data!.email }) }
  }

  async getGoogleProfile(accessToken: string): Promise<GoogleProfile> {
    const headers = { Authorization: `Bearer ${accessToken}` }

    const result = await fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?scope=${this.scopes}`,
      { headers }
    )

    if (result.status >= 400) {
      throw Error('Error Retrieving Google Profile')
    }

    return result.json()
  }
}
