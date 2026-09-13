import type { Document } from "mongoose"
import type { GenderEnum, OtpTypeEnum, ProviderEnum, RoleEnum } from "../../Common/index.js"
import type { Request } from "express"
import type { JwtPayload } from "jsonwebtoken"




export interface IOTP {
    value:string,
    expiresAt:Date,
    otpType:OtpTypeEnum
}

export interface IUser extends Document{
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    role:RoleEnum,
    gender:GenderEnum,
    DOB?:Date,
    age:number
    profilePicture?:string,
    coverPicture?:string,
    provider:ProviderEnum,
    googleId?:string,
    phoneNumber?:string,
    isVerified?:boolean,
    OTPs?:IOTP[]
}


export interface IEmail {
    subject:string,
    to:string,
    attachments?:[],
    content:string
}

export interface IBlackListedToken {
    tokenId:string,
    expiresAt:Date
}

export interface IRequest extends Request{
    loggedInUser : {user:IUser , token:JwtPayload}
}
