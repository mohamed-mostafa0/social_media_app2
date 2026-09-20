import type { IFailedResponse, ISuccessResponse } from "../../Common/index.js"




export function successResponse<T>(
    message = "Your request is processed successfully",
    status = 200,
    data?:T
):ISuccessResponse{
   return {
    meta:{
        status,
        success:true
    },
    data:{
        message,
        data
    }
   } 
}
export function failedResponse(
    message = "Your request is failed",
    status = 500,
    error?:object
):IFailedResponse{
   return {
    meta:{
        status,
        success:false
    },
    error:{
        message,
        error
    }
   } 
}