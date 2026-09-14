import {Router} from 'express'
import profileService from '../Services/profile.service.js'
import { authentication } from '../../../Middlewares/index.js'

export const profileController = Router()

profileController.get("/:id" , profileService.getProfile)
profileController.put("" , authentication, profileService.updateProfile)


