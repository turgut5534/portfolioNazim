import { Router } from "express";
import { homePage } from "../controllers/site.controller.js"

const router = Router()

router.get('/', homePage)

export default router;