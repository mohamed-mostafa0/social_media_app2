import type { IPost } from "../../Common/index.js";
import { PostModel } from "../Models/index.js";
import { BaseRepository } from "./base.repository.js";
import type { PaginateOptions, QueryFilter } from 'mongoose';





export class PostRepository extends BaseRepository<IPost>{
    constructor(){
        super(PostModel)
    }

    async postPagination(filters?: QueryFilter<IPost> , options?:PaginateOptions){
        return await PostModel.paginate(filters , options)
    }
}