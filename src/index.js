import express from 'express'
import router from './routes/index.js'
import { checkMembers, cronLog } from './util/cron.js'
import { dbConnection } from './config/db.js'

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3001

app.use('/', router)

dbConnection()
  .then(() => {
    console.log('Databse connected')
    app.listen(PORT, () => {
      console.log('Server is running')
    })
  })
  .catch((error) => console.error('Connection to DB failed: ', error))

app.listen(PORT, () => {
  console.log('Server is running')
})

app.get('/health', (req, res) => {
  res.json({ status: 'ok', body: 'Hello tetix' })
})

cronLog()

checkMembers()
