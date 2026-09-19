import type { Types } from "mongoose";



export interface IComment{
    content:string,
    attachments:string,
    ownerId:Types.ObjectId,
    refId:Types.ObjectId,
    onModel:string
}