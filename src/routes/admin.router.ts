import {Router} from 'express'
import { dashBoard,login, postLogin, saveUser } from '../controllers/admin.controller'

const router = Router()

router.get('/', dashBoard)
router.get('/login', login)
router.post('/login', postLogin)
router.post('/user/save', saveUser)

export default router