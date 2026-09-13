import {Router} from "express"
import authService from '../Services/auth.service.js'
import { authentication } from "../../../Middlewares/index.js"

const authController = Router()

authController.post('/signup' , authService.signup)
authController.post('/signin' , authService.signin)
authController.post('/logout' ,authentication, authService.logout)

export {authController}