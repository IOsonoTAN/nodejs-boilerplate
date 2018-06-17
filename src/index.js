import express from 'express'
import morgan from 'morgan'
import serveStatic from 'serve-static'
import path from 'path'

import connectMongo from './models/mongo'
import connectRedis from './models/Redis'

connectMongo()
connectRedis()

const app = express()

app.use(morgan('dev'))
app.use(serveStatic(path.join(__dirname, 'public'), {
  maxAge: '1d'
}))

app.get('/', (req, res) => {
  res.send('hello!')
})

export default app
