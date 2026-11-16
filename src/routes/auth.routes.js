import express from 'express'
import { login, register } from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/reg', register)
router.post('/log', login)

export default router
