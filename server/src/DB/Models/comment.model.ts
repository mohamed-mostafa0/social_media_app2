import mongoose from "mongoose";
import type { IComment } from "../../Common/index.js";




const commentSchema = new mongoose.Schema<IComment>({
    content:String,
    attachments:String,
    ownerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    refId:{
        type:mongoose.Schema.Types.ObjectId,
        refPath:"onModel",
        required:true
    },
    onModel:{
        type:String,
        enum:["Post" , "Comment"]
    }
})

export const CommentModel = mongoose.model<IComment>("Comment" , commentSchema)