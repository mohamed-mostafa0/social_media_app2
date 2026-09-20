import type { NextFunction, Request, Response } from "express"
import type { ZodType } from "zod"
import { BadRequestException } from "../Utils/index.js"


type RequestKeyType = keyof Request
type SchemaType = Partial<Record<RequestKeyType , ZodType>>
type ValidationKeyType = {
    key:RequestKeyType,
    issues:{
        path:PropertyKey[],
        message:string
    }[]
}



export const validation =(schema:SchemaType)=>{
    
    return (req:Request , res:Response , next:NextFunction)=>{
        const reqKeys:RequestKeyType[] = ['body','params','headers','query']

        const validationErrors:ValidationKeyType[] = []
        for (const key of reqKeys) {
            if(schema[key]){
                const result = schema[key].safeParse(req[key])
                if(!result.success){
                    const issues = result.error?.issues?.map(issue=>({
                        path:issue.path,
                        message:issue.message
                    }))
                    validationErrors.push({key , issues})
                }
            }
        }

        if(validationErrors.length) throw new BadRequestException('Validation Error' , {validationErrors})

        next()
    }
}