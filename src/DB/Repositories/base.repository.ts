import type mongoose from "mongoose";
import type { Model, ProjectionType, QueryFilter, QueryOptions } from "mongoose";





export class BaseRepository<T>{

    constructor(private model:Model<T>){}


    async findOneDocument(filters:QueryFilter<T> , projection?:ProjectionType<T> ,options?:QueryOptions):Promise<T | null>{
       return await this.model.findOne(filters , projection , options)
    }

    async findDocumentById(id:mongoose.Schema.Types.ObjectId , projection?:ProjectionType<T> , options?:QueryOptions):Promise<T | null>{
        return await this.model.findById(id , projection , options)
    }

    async createDocument(doc:Partial<T>):Promise<T | null>{
        return await this.model.create(doc)
    }
}