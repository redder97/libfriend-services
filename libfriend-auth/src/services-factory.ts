import { IRepositoryFactory } from 'libfriend-core'
import { GoogleAuthService } from './services/google-auth.service'
import { OAuth2Client } from 'google-auth-library'
import { google } from 'googleapis';
import config from './config';

export class ServicesFactory {

  static instance: ServicesFactory 
  static googleOauth2ClientInstance: OAuth2Client 

  private constructor(
    private repositoryFactory: IRepositoryFactory,
  ) {}

  static getInstance(repositoryFactory: IRepositoryFactory) {
      if (this.instance) return this.instance

      this.googleOauth2ClientInstance =  new google.auth.OAuth2(
        config.GOOGLE_CLIENT_ID,
        config.GOOGLE_CLIENT_SECRET,
        config.GOOGLE_REDIRECT_URL
      );
      
      this.instance = new ServicesFactory(repositoryFactory)

      return this.instance
     }

  get googleService(): GoogleAuthService {
    return new GoogleAuthService(
      ServicesFactory.googleOauth2ClientInstance,
      this.repositoryFactory.userRepository
    )
  }
}
