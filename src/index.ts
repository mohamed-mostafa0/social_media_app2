import 'dotenv/config'
import express, { type NextFunction, type Request, type Response } from "express"
import * as controllers from './Modules/index.js'
import { dbConnection } from './DB/db.connection.js'


const app = express()
dbConnection()
app.use(express.json())


app.use("/api/auth" , controllers.authController)


app.use((err:Error, req:Request , res:Response , next:NextFunction)=>{
    console.log("ERROR",err);
    return res.status(500).json({message:"something went wrong" , err , stack:err.stack})
})

const port:number | string = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`server started on port ${port}`);
    
})
