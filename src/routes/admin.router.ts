import {Router} from 'express'
import { dashBoard,login, postLogin, saveUser, logUserOut } from '../controllers/admin.controller'
import {authMiddleware} from '../middlewares/authentication'

const router = Router()

router.get('/', authMiddleware, dashBoard)
router.get('/login', login)
router.post('/login', postLogin)
router.post('/user/save', saveUser)
router.get('/logout', logUserOut)

export default router