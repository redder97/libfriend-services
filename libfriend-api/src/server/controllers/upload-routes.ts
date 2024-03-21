import express, { Request, Response } from 'express'
import { service } from '../../dependencies'
import { FileTypes } from 'libfriend-core'

const uploadRouter = express.Router()

uploadRouter.post('/upload', (req: Request, res: Response) => {
  service.uploaderService.upload([
    {
      filename: 'test.pdf',
      type: FileTypes.PDF,
    },
  ])
  return {}
})

export default uploadRouter
