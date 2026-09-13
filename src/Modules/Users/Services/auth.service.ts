import type { Request, Response } from "express";
import { OtpTypeEnum, type IOTP, type IRequest, type IUser } from "../../../Common/index.js";
import { BlackListedTokenRepository, UserRepository } from "../../../DB/Repositories/index.js";
import { UserModel , BlackListedTokenModel} from "../../../DB/Models/index.js";
import { customAlphabet } from 'nanoid'
import { compareHash, ConflictException, eventEmiiter, generateHash, generateToken, UnauthorizedException } from "../../../Utils/index.js";
import { v4 as uuidv4 } from 'uuid';
import type { SignOptions } from "jsonwebtoken";

const nanoid = customAlphabet("123456789ABCDEFG" , 6)


class AuthService {

    private userRepo:UserRepository = new UserRepository(UserModel)
    private blackListedRepo:BlackListedTokenRepository = new BlackListedTokenRepository(BlackListedTokenModel)



    signup = async(req:Request , res:Response)=>{
        const {firstName , lastName , email , password , gender ,phoneNumber }:Partial<IUser> = req.body

        const isEmailExist = await this.userRepo.findOneDocument({email} , 'email')
        if(isEmailExist) throw new ConflictException("Email Already Exist")

        const otp = nanoid()
        eventEmiiter.emit("send-email",{
            to:email,
            subject:"Eamil Confirmation",
            content:`Your OTP is ${otp}`
        })

        const confirmationOtp:IOTP = {
            value:otp,
            expiresAt: new Date(Date.now() + 600000),
            otpType:OtpTypeEnum.CONFIRMATION
        }
        const hashedPassword:string = generateHash(password!) 

        const user = await this.userRepo.createDocument({
            firstName , lastName , gender , email , password:hashedPassword , phoneNumber,OTPs:[confirmationOtp]
        })

        return res.status(201).json({message:"Registered Successfully" , user})
    }


    signin = async(req:Request , res:Response)=>{
        const {email , password} = req.body

        const user = await this.userRepo.findOneDocument({email})
        if(!user) throw new UnauthorizedException("User not found, Please signup first and try again")

        const matchPassword = compareHash(password , user.password)
        if(!matchPassword)  return res.status(401).json({message:"Incorrect Credentials"})

        const accessToken = generateToken({
            _id:user._id,
            email:user.email,
            provider:user.provider,
        } ,
         process.env.ACCESS_TOKEN_SECRET,
        {
            jwtid:uuidv4(),
            expiresIn:process.env.ACCESS_TOKEN_EXPIRATION_TIME as SignOptions['expiresIn']
        })

        const refreshToken = generateToken({
            _id:user._id,
            email:user.email,
            provider:user.provider,
        } ,
         process.env.REFRESH_TOKEN_SECRET,
        {
            jwtid:uuidv4(),
            expiresIn:process.env.REFRESH_TOKEN_EXPIRATION_TIME as SignOptions['expiresIn']
        })

        return res.status(200).json({accessToken , refreshToken})
    }


    logout = async(req:Request , res:Response)=>{
        const {user , token} = (req as unknown as IRequest).loggedInUser

        const blackListToken =  this.blackListedRepo.createDocument({
            tokenId:token.jti,
            expiresAt:new Date(token.exp || Date.now() + 600000)
        })
        return res.status(200).json({blackListToken})
    }
}

export default new AuthService()