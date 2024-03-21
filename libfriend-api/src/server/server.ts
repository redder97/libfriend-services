import express, { NextFunction, Request, Response } from 'express'
import { initializeContainer } from '../dependencies'
import uploadRouter from './controllers/upload-routes'

const app = express()
initializeContainer()

app.use('/api/v1', uploadRouter)
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err) {
    return res.status(err.statusCode || 500).json(err.message);  
  }
  next() 
}); 

app.listen(5001, () => {
  console.log('listening on port 5001')
})
