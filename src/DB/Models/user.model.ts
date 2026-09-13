import mongoose from "mongoose";
import { GenderEnum, OtpTypeEnum, ProviderEnum, RoleEnum, type IUser } from "../../Common/index.js";




const userSchema = new mongoose.Schema<IUser>({
    firstName:{
        type:String,
        required:true,
        minLength:[4 , "first name must be at least 4 chars"]

    },
    lastName:{
        type:String,
        required:true,
        minLength:[4 , "Last name must be at least 4 chars"]
    },
    email:{
        type:String,
        required:true,
        index:{
            unique:true,
            name:"idx_email_unique"
        }
    },
    password:{
        type:String,
        required:true
    },
    age:Number,
    role:{
        type:String,
        enum:RoleEnum,
        default:RoleEnum.USER
    },
    gender:{
        type:String,
        enum:GenderEnum,
        default:GenderEnum.MALE
    },
    DOB:Date,
    profilePicture:String,
    coverPicture:String,
    provider:{
        type:String,
        enum:ProviderEnum,
        default:ProviderEnum.LOCAL
    },
    googleId:String,
    isVerified:{
        type:Boolean,
        default:false
    },
    phoneNumber:String,
    OTPs:[{
        value:{type:String , required:true},
        expiresAt:{type:Date , default:Date.now() + 600000},
        otpType:{type:String , enum:OtpTypeEnum , required:true}
    }]
})


export const UserModel = mongoose.model<IUser>('User' , userSchema)
