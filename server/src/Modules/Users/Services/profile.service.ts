import type { Request, Response } from "express";
import {  FollowRepository, UserRepository } from "../../../DB/Repositories/index.js";
import { UserModel } from "../../../DB/Models/index.js";
import mongoose from "mongoose";
import { BadRequestException, deleteImageFromCloudinary, successResponse, uploadImageOnCloudinary } from "../../../Utils/index.js";
import { followStatusEnum, type IRequest, type IUser } from "../../../Common/index.js";




class ProfileService {

    private userRepo:UserRepository = new UserRepository(UserModel)
    private followRepo = new FollowRepository()


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


    uploadCoverPicture = async(req:Request , res:Response)=>{
        const {user} = (req as unknown as IRequest).loggedInUser
        const file:Express.Multer.File | undefined = req.file
        if(!file) throw new BadRequestException("please attach an image") 
        
        let result;
        if(user.coverPictureId){
            await deleteImageFromCloudinary(user.coverPictureId)
        }
        try {
            result = await uploadImageOnCloudinary(file.path, "cover-picture");
        } catch(error) {
            throw new BadRequestException("Failed to upload image", error as Error);
        }

        const updatedUser = await this.userRepo.findByIdAndUpdateDocument( user._id as unknown as mongoose.Schema.Types.ObjectId , {
            coverPicture: result.secure_url,
            coverPictureId:result.public_id
        } , {new:true});

        if(!updatedUser) throw new BadRequestException("Failed to update cover picture");
        
        return res.status(200).json(successResponse("Cover picture updated successfully", 200, updatedUser));
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

    // sendFriendShipRequest = async(req:Request , res:Response)=>{
    //     const {user} = (req as unknown as IRequest).loggedInUser

    //     const friendRequestTo = req.body.friendRequestTo
    //     if(!friendRequestTo) throw new BadRequestException("Request to id is required")

    //     if(user._id.toString() === friendRequestTo.toString()) {
    //         throw new BadRequestException("You cannot send a friend request to yourself")
    //     }

    //     const isUserExist = await this.userRepo.findDocumentById(friendRequestTo)
    //     if(!isUserExist) throw new BadRequestException("User not found")

    //     const existingFriendship = await this.friendshipRepo.findOneDocument({
    //         $or: [
    //             { requestFromId: user._id, requestToId: friendRequestTo },
    //             { requestFromId: friendRequestTo, requestToId: user._id }
    //         ]
    //     })
        
    //     let message;
    //     if(existingFriendship){
    //         if (existingFriendship.status === friendshipStatusEnum.ACCEPTED) {
    //             throw new BadRequestException("You are already friends with this user")
    //         }
    //         if (existingFriendship.requestToId.toString() === user._id.toString()) {
    //             throw new BadRequestException("You already have a pending friend request from this user. Please accept it instead.")
    //         }
    //         await this.friendshipRepo.findDocumentByIdAndDelete(existingFriendship._id as unknown as mongoose.Schema.Types.ObjectId)
    //         message = "Friend request cancelled"
    //     }else{
    //         await this.friendshipRepo.createDocument({
    //             requestFromId:user._id,
    //             requestToId:friendRequestTo
    //         })
    //         message = "Friend request sent"
    //     }

    //     return res.status(201).json(successResponse(message , 201))
    // }


    // listRequests = async(req:Request , res:Response)=>{
    //     const {user:{_id}} = (req as IRequest).loggedInUser
    //     const {status} = req.query
        
    //     const filters:QueryFilter<IFriendship> = {status : status? status as friendshipStatusEnum : friendshipStatusEnum.PENDING}
    //     if(filters.status === friendshipStatusEnum.ACCEPTED) filters.$or = [{requestToId:_id} , {requestFromId:_id}]
    //     else filters.requestToId = _id

    //     const requests = await this.friendshipRepo.findDocuments(filters , undefined , {
    //         populate:[
    //             {
    //                 path:"requestToId",
    //                 select:"firstName lastName profilePicture"
    //             },
    //             {
    //                 path:"requestFromId",
    //                 select:"firstName lastName profilePicture"
    //             }
    //         ]
    //     })
    //     return res.status(200).json(successResponse("Requests fetched successfully" , 200 , requests))
    // }

    // respondToFriendRequest = async(req:Request , res:Response)=>{
    //     const {user:{_id}} = (req as IRequest).loggedInUser

    //     const {friendRequestId , response} = req.body

    //     if(!response || !friendRequestId) throw new BadRequestException("Missing details")
        
    //     const friendShip = await this.friendshipRepo.findOneDocument({_id:friendRequestId , status:friendshipStatusEnum.PENDING})
    //     if(!friendShip) throw new BadRequestException("Friend request not found or already processed")

    //     if(friendShip.requestToId.toString() !== _id.toString()) throw new BadRequestException("You are not authorized to respond to this request")

    //     friendShip.status = response
    //     friendShip.save()
        
    //     return res.status(200).json(successResponse(response === friendshipStatusEnum.ACCEPTED ? "Friend request accepted" : "Friend request rejected" , 200))
    // }



    toggleFollow = async (req: Request, res: Response) => {
    const { user } = (req as IRequest).loggedInUser;
    const { followToId } = req.params;
    if (!followToId) throw new BadRequestException("Following id is required");
    if (!mongoose.isValidObjectId(followToId)) throw new BadRequestException("Invalid following id");
    if (user._id.toString() === followToId.toString()) throw new BadRequestException("You cannot follow yourself");

    const targetUser = await this.userRepo.findDocumentById(followToId as unknown as mongoose.Types.ObjectId);
    if (!targetUser || targetUser.isDeleted || targetUser.isDeactivated) {
        throw new BadRequestException("User not found or account is deactivated");
    }

    const existingFollow = await this.followRepo.findOneDocument({
        followFromId: user._id,
        followToId: followToId as unknown as mongoose.Types.ObjectId
    });

    let message: string;
    let statusCode = 200;

    if (existingFollow) {
        await this.followRepo.findDocumentByIdAndDelete(existingFollow._id as unknown as mongoose.Schema.Types.ObjectId);
        if (existingFollow.status === followStatusEnum.ACCEPTED) {
            targetUser.followersCount = Math.max(0, (targetUser.followersCount || 0) - 1);
            user.followingCount = Math.max(0, (user.followingCount || 0) - 1);
            await targetUser.save();
            await user.save();
            message = "User unfollowed successfully";
        } else {
            message = "Follow request cancelled successfully";
        }
    } else {
        const isTargetPrivate = Boolean(targetUser.isPrivate);
        const status = isTargetPrivate ? followStatusEnum.PENDING : followStatusEnum.ACCEPTED;
        await this.followRepo.createDocument({
            followFromId: user._id,
            followToId: followToId as unknown as mongoose.Types.ObjectId,
            status
        });
        if (isTargetPrivate) {
            message = "Follow request sent successfully";
        } else {
            targetUser.followersCount = (targetUser.followersCount || 0) + 1;
            user.followingCount = (user.followingCount || 0) + 1;
            await targetUser.save();
            await user.save();
            message = "User followed successfully";
        }
        statusCode = 201;
    }
    return res.status(statusCode).json(successResponse(message, statusCode));
};



}


export default new ProfileService()