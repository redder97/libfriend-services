import express from 'express'
import { initializeContainer } from '../dependencies';
import uploadRouter from './controllers/upload-routes';

const app = express()
initializeContainer()

app.use('/api/v1', uploadRouter)

app.listen(5000, () => {
    console.log('listening on port 5000')
})

