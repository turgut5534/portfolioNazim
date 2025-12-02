import {Router} from 'express'
import { dashBoard,login, postLogin, saveUser, logUserOut, editProfile, updateProfile, settings, getSkills, addSkills, deleteSkill} from '../controllers/admin.controller'
import {authMiddleware} from '../middlewares/authentication'

const router = Router()

router.get('/', authMiddleware, dashBoard)
router.get('/login', login)
router.get('/logout', logUserOut)
router.get('/profile', authMiddleware, editProfile )
router.get('/settings', authMiddleware, settings )
router.get('/skills', authMiddleware, getSkills )

router.post('/login', postLogin)
router.post('/user/save', saveUser)
router.post('/profile/update', authMiddleware, updateProfile )
router.post('/skills/create', authMiddleware, addSkills )

router.post('/skills/delete/:id', authMiddleware,deleteSkill)

export default router