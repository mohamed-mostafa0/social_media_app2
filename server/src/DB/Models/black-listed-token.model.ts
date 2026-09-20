import mongoose from "mongoose";
import type { IBlackListedToken } from "../../Common/index.js";




const blackListedTokenSchema = new mongoose.Schema<IBlackListedToken>({
    tokenId:{
        type:String,
        required:true
    },
    expiresAt:{
        type:Date,
        required:true
    }
})


export const BlackListedTokenModel = mongoose.model<IBlackListedToken>("BlacklistedTokens" , blackListedTokenSchema)