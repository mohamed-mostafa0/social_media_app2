import {Router} from 'express'
import profileService from '../Services/profile.service.js'
import { authentication } from '../../../Middlewares/index.js'
import { uploadImage, validateImage } from '../../../Middlewares/multer.middleware.js'

export const profileController = Router()

profileController.put("" , authentication, profileService.updateProfile)

profileController.post("/upload-profile-picture",
    authentication ,
    uploadImage().single("profile-picture") ,
    validateImage ,profileService.uploadProfilePicture )

profileController.post("/upload-cover-picture",
    authentication,
    uploadImage().single("cover-picture"),
    validateImage, 
    profileService.uploadCoverPicture )
    
profileController.post("/send-friend-request" , authentication , profileService.sendFriendShipRequest)

profileController.get("/:id" , profileService.getProfile)

profileController.post("/list-requests" , authentication , profileService.listRequests)


