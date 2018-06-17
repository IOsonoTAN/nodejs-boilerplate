import mongoose from 'mongoose'
import config from '../config'

export default () => {
  const connect = new Promise((resolve, reject) => {
    mongoose.connect(config.database.mongoUri)
    mongoose.connection.on('connected', () => {
      console.log(`-- direct mongo connected to ${config.database.mongoUri}`)
      resolve(mongoose)
    })
    mongoose.connection.on('error', (err) => {
      reject(err)
    })
  })

  return connect
}
