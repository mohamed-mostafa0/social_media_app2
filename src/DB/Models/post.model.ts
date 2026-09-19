import mongoose from "mongoose";
import type { IPost } from "../../Common/index.js";




const postSchema = new mongoose.Schema<IPost>({
    describtion:String,
    attachments:[String],
    ownerId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    allowComments:{
        type:Boolean,
        default:true
    },
    tags:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ]
})

export const PostModel = mongoose.model<IPost>("Post" , postSchema)