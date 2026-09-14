import type { Request, Response } from "express";
import { UserRepository } from "../../../DB/Repositories/index.js";
import { UserModel } from "../../../DB/Models/index.js";
import mongoose from "mongoose";
import { BadRequestException, successResponse } from "../../../Utils/index.js";
import type { IRequest, IUser } from "../../../Common/index.js";




class ProfileService {

    private userRepo:UserRepository = new UserRepository(UserModel)


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