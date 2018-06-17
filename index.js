import app from './src/index'
import config from './src/config'

const { port } = config

app.listen(port, () => console.log(`application is running on port ${port}`))
