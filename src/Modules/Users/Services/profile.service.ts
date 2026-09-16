import type { Request, Response } from "express";
import { UserRepository } from "../../../DB/Repositories/index.js";
import { UserModel } from "../../../DB/Models/index.js";
import mongoose from "mongoose";
import { BadRequestException, deleteImageFromCloudinary, successResponse, uploadImageOnCloudinary } from "../../../Utils/index.js";
import type { IRequest, IUser } from "../../../Common/index.js";




class ProfileService {

    private userRepo:UserRepository = new UserRepository(UserModel)


    uploadProfilePicture = async(req:Request , res:Response)=>{
        const {user} = (req as unknown as IRequest).loggedInUser
        const file:Express.Multer.File | undefined = req.file
        if(!file) throw new BadRequestException("please attach an image") 
        
        let result;
        if(user.profilePictureId){
            await deleteImageFromCloudinary(user.profilePictureId)
        }
        try {
            result = await uploadImageOnCloudinary(file.path, "profile-picture");
        } catch(error) {
            throw new BadRequestException("Failed to upload image", error as Error);
        }

        const updatedUser = await this.userRepo.findByIdAndUpdateDocument( user._id as unknown as mongoose.Schema.Types.ObjectId , {
            profilePicture: result.secure_url,
            profilePictureId:result.public_id
        } , {new:true});

        if(!updatedUser) throw new BadRequestException("Failed to update profile picture");
        
        return res.status(200).json(successResponse("Profile picture updated successfully", 200, updatedUser));
    }


    getProfile = async(req:Request<{id:string}> , res:Response)=>{
        const id = req.params.id as unknown as mongoose.Types.ObjectId
        
        // const id = new mongoose.Types.ObjectId(req.params.id)
        console.log(id);
        console.log(typeof id);
        const user = await this.userRepo.findDocumentById(id)
        if(!user) throw new BadRequestException('User Not Found')

        return res.status(200).json(successResponse("" , 200 , user))
    }

    updateProfile = async(req:Request , res:Response)=>{
        const {firstName , lastName  , password , phoneNumber , gender}:Partial<IUser> = req.body
        const {user} = (req as unknown as IRequest).loggedInUser

        await this.userRepo.findOneupdateDocument(
            {_id:user._id , email:user.email},
            {$set:{firstName , lastName  , password , gender, phoneNumber}},
            {new:true}
        )
        return res.json(successResponse("Profile Updated Successfully" ,200))
    }
}


export default new ProfileService()