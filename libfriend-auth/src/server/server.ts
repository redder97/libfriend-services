import express, { NextFunction, Request, Response } from 'express'
import googleRouter from './routes/google.routes';
import { initializeContainer } from '../dependencies';

const app = express()

initializeContainer()

app.use('/api/v1', googleRouter)
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    return res.status(err.statusCode || 500).json(err.message)
  }
  next()
})

app.listen(5002, () => {
  console.log('listening on port 5002')
})
