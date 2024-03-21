import express, { Request, Response } from 'express'
import { service } from '../../dependencies'

const uploadRouter = express.Router()

uploadRouter.post('/upload', (req: Request, res: Response) => {
  service.uploaderService.upload(new File([], 'test'))
  return {}
})

export default uploadRouter
