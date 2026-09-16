import {Router} from 'express'
import profileService from '../Services/profile.service.js'
import { authentication } from '../../../Middlewares/index.js'
import { uploadImage, validateImage } from '../../../Middlewares/multer.middleware.js'

export const profileController = Router()

profileController.get("/:id" , profileService.getProfile)
profileController.put("" , authentication, profileService.updateProfile)
profileController.post("/upload-profile-picture" ,authentication , uploadImage().single("profile-picture") , validateImage ,profileService.uploadProfilePicture )


