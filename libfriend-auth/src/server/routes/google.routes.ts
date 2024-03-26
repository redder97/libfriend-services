import express, { Request, Response, NextFunction } from 'express'
import { service } from '../../dependencies'
import config from '../../config';

const googleRouter = express.Router()

googleRouter.post('/google', (req: Request, res: Response) => {
  const redirectUrl = service.googleService.generateAuthorizationUrl()
  res.redirect(redirectUrl)
})

googleRouter.get(
  '/oauth2/google/callback',
  async (req: Request, res: Response, next: NextFunction) => {
    const query: { code: string } & any = req.query

    try {
      const { tokens } = await <any>service.googleService.getOauth2Client().getToken(query.code)
      const googleProfile = await service.googleService.getGoogleProfile(
        tokens.access_token as string
      )
      const jwt = await service.googleService.handleGoogleProfile(googleProfile)

      res.redirect(`${config.OAUTH_SUCCESS_REDIRECT}?token=${jwt.token}`)
    } catch (err: any) {
      next(err)
    }
  }
)

export default googleRouter
