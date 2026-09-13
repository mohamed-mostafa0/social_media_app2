import 'dotenv/config'
import express, { type NextFunction, type Request, type Response } from "express"
import * as controllers from './Modules/index.js'
import { dbConnection } from './DB/db.connection.js'
import { HttpException } from './Utils/index.js'


const app = express()
dbConnection()
app.use(express.json())


app.use("/api/auth" , controllers.authController)


app.use((err:Error | HttpException | null, req:Request , res:Response , next:NextFunction)=>{
    if(err){
        if(err instanceof HttpException){
            res.status(err.statusCode).json({message:err.message , error:err.error})
        }else{
            res.status(500).json({message:"something went wrong" , err , stack:err.stack})
        }
    }
})

const port:number | string = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`server started on port ${port}`);
    
})
