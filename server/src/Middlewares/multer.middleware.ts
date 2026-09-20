import type { NextFunction, Request, Response } from "express"
import multer from "multer"
import { AllowedFileExtenstionsEnum, fileTypeEnum } from "../Common/index.js"
import { BadRequestException } from "../Utils/index.js"
import { fileTypeFromFile, fileTypeFromTokenizer, type FileTypeResult } from "file-type"
import { unlink } from "node:fs/promises"




export const uploadImage = ()=>{
        const storage = multer.diskStorage({})

        const fileFilter = async(req:Request , file:Express.Multer.File , cb:multer.FileFilterCallback)=>{

            console.log(file.mimetype);
            
            
            const fileMimeType:string | undefined= file.mimetype.split("/")[0]
            console.log(fileMimeType);
            
            if(!fileMimeType || !Object.values(fileTypeEnum).includes(fileMimeType))                
                return cb(new BadRequestException(`Allowed file types ${Object.values(fileTypeEnum)}`))
            
            const fileExtenstion:string | undefined= file.mimetype.split("/")[1]
            console.log("fileExtention:" , fileExtenstion);

            if(!fileExtenstion || !AllowedFileExtenstionsEnum[fileMimeType]?.includes(fileExtenstion))
                return cb(new BadRequestException(`Allowd file extenstions ${AllowedFileExtenstionsEnum[fileMimeType]}`))

            return cb(null, true)
        }

        
        return multer({fileFilter,storage})
    }


export const validateImage = async(req:Request , res:Response ,next:NextFunction)=>{


    const file = req.file
    if(!file) throw new BadRequestException("Profile picture is required")

        try{
            const detectedType: FileTypeResult | undefined = await fileTypeFromFile(file.path)
            if (!detectedType) throw new BadRequestException("Unknown or unsupported file type");
            console.log(detectedType);

                
            const [fileMimeType , fileExtenstion] = detectedType.mime.split("/")
            if(!fileMimeType || !Object.values(fileTypeEnum).includes(fileMimeType))
                throw new BadRequestException(`File is not allowes. Allowed file types ${Object.values(fileTypeEnum)}`)
            if(!fileExtenstion || !AllowedFileExtenstionsEnum[fileMimeType]?.includes(fileExtenstion))
                throw new BadRequestException("File format is not allowed");
        }catch(err){
            await unlink(file.path)
            return next(err)
        }


        next()
        
}
