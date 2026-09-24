import mongoose from "mongoose";
import { followStatusEnum, type IFollow } from "../../Common/index.js";



const followSchema = new mongoose.Schema<IFollow>({
    followFromId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    followToId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    // requestFromId:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"User"
    // },
    // requestToId:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"User"
    // },
    status:{
        type:String,
        enum:followStatusEnum,
        // default:followStatusEnum.PENDING
    }
},{timestamps:true})

followSchema.index({
    folloFromId:1,
    followToId:1
})
// followSchema.index({
//     requestFromId:1,
//     requestToId:1
// })

followSchema.pre("save" , async function(){
    if(!this.status){
        const targetUser = await mongoose.model("User").findById(this.followToId).select("isPrivate")

        this.status = targetUser?.isPrivate ? followStatusEnum.PENDING : followStatusEnum.ACCEPTED
    }
})


export const FollowModel = mongoose.model<IFollow>("Follow" , followSchema)