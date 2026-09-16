import mongoose from "mongoose";
import { friendshipStatusEnum, type IFriendship } from "../../Common/index.js";



const friendshipSchema = new mongoose.Schema<IFriendship>({
    requestFromId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    requestToId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    status:{
        type:String,
        enum:friendshipStatusEnum,
        default:friendshipStatusEnum.PENDING
    }
},{timestamps:true})


export const FriendshipModel = mongoose.model<IFriendship>("Friendship" , friendshipSchema)