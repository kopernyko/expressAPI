import express from 'express'
import router from './routes/user.routes.js'

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3001

app.use('/users', router)

app.listen(PORT, () => {
  console.log('Server is running')
})

app.get('/health', (req, res) => {
  res.json({ status: 'ok', body: 'Hello tetix' })
})
