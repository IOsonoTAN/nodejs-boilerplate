import redis from 'redis'
import config from '../config'

export default () => {
  const connect = new Promise((resolve, reject) => {
    const client = redis.createClient(config.database.redisUri)
    client.on('connect', () => {
      console.log(`-- direct redis connected to ${config.database.redisUri}`)
      resolve(client)
    })
    client.on('error', (err) => {
      reject(err)
    })
  })

  return connect
}
