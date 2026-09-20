import 'dotenv/config'
import express, { type NextFunction, type Request, type Response } from "express"
import * as controllers from './Modules/index.js'
import { dbConnection } from './DB/db.connection.js'
import { failedResponse, HttpException } from './Utils/index.js'


const app = express()
dbConnection()
app.use(express.json())


app.use("/api/auth" , controllers.authController)
app.use("/api/profile" , controllers.profileController)
app.use("/api/comment" , controllers.CommentController)
app.use("/api/post" , controllers.PostController)


app.use((err:Error | HttpException | null, req:Request , res:Response , next:NextFunction)=>{
    if(err){
        if(err instanceof HttpException){
            res.status(err.statusCode).json(failedResponse(err.message , err.statusCode , err.error))
        }else{
            res.status(500).json(failedResponse("Something Went Wrong" , 500 , err))
        }
    }
})

const port:number | string = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`server started on port ${port}`);
    
})
