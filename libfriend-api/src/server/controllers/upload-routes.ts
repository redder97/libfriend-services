import express, { NextFunction, Request, Response } from 'express'
import { service } from '../../dependencies'
import { FileTypes } from 'libfriend-core'

const uploadRouter = express.Router()

uploadRouter.post('/upload', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ids = await service.uploaderService.upload([
      {
        filename: 'test.pdf',
        type: FileTypes.PDF,
      },
    ])
    res.json(ids)
  } catch (err) {
    next(err)
  }
  
})

export default uploadRouter
