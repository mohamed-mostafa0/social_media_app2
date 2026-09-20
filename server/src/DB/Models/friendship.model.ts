import mongoose from "mongoose";
import { friendshipStatusEnum, type IFriendship } from "../../Common/index.js";



const friendshipSchema = new mongoose.Schema<IFriendship>({
    requestFromId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    requestToId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    status:{
        type:String,
        enum:friendshipStatusEnum,
        default:friendshipStatusEnum.PENDING
    }
},{timestamps:true})

friendshipSchema.index({
    requestFromId:1,
    requestToId:1
})


export const FriendshipModel = mongoose.model<IFriendship>("Friendship" , friendshipSchema)