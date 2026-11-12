import express from 'express'
import { log } from '../middlewares/log.js'
import * as usrCtrl from '../controllers/user.controllers.js'

const router = express.Router()

router.get('/', log, usrCtrl.getUsers)

router.post('/', log, usrCtrl.postUser)

router.put('/:id', log, usrCtrl.putUser)

router.delete('/:id', log, usrCtrl.deleteUser)

export default router
