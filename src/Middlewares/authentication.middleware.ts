import type { NextFunction, Request, Response } from "express";
import { verifyToken } from "../Utils/index.js";
import { BlackListedTokenRepository, UserRepository } from "../DB/Repositories/index.js";
import { BlackListedTokenModel, UserModel } from "../DB/Models/index.js";
import type { IRequest, IUser } from "../Common/index.js";
import type { JwtPayload } from "jsonwebtoken";



const blackListedRepo = new BlackListedTokenRepository(BlackListedTokenModel)
const userRepo = new UserRepository(UserModel)

export const authentication = async(req:Request , res:Response , next:NextFunction)=>{
    const{authorization:accessToken} = req.headers
    if(!accessToken) return res.status(401).json({message:"Please Login First"})

    const decodedToken = verifyToken(accessToken , process.env.ACCESS_TOKEN_SECRET as string)
    if(!decodedToken) return res.status(401).json("Invalid Token")

    const isTokenBlackListed = await blackListedRepo.findOneDocument({tokenId:decodedToken.jti})
    if(isTokenBlackListed) return res.status(401).json({message:"Session Expired, Please login again"})

    const user:IUser | null = await userRepo.findDocumentById(decodedToken._id)
    if(!user) return res.status(401).json({message:"Account not found , Please register first"});

    (req as unknown as IRequest).loggedInUser = {user , token:decodedToken as JwtPayload}
    next()
}