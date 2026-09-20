import type { Document, Types } from "mongoose"
import type { friendshipStatusEnum, GenderEnum, OtpTypeEnum, ProviderEnum, RoleEnum } from "../index.js"
import type { Request } from "express"
import type { JwtPayload } from "jsonwebtoken"




export interface IOTP {
    value: string,
    expiresAt: Date,
    otpType: OtpTypeEnum
}

export interface IUser extends Document {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: RoleEnum,
    gender: GenderEnum,
    DOB?: Date,
    age: number
    profilePicture?: string,
    profilePictureId?: string,
    coverPicture?: string,
    coverPictureId?: string,
    provider: ProviderEnum,
    googleId?: string,
    phoneNumber?: string,
    isVerified?: boolean,
    OTPs?: IOTP[]
}


export interface IEmail {
    subject: string,
    to: string,
    attachments?: [],
    content: string
}

export interface IBlackListedToken {
    tokenId: string,
    expiresAt: Date
}

export interface IRequest extends Request {
    loggedInUser: { user: IUser, token: JwtPayload }
}

export interface IFriendship extends Document {
    requestFromId: Types.ObjectId,
    requestToId: Types.ObjectId,
    status: friendshipStatusEnum
}
