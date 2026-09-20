import type { IPost } from "../../Common/index.js";
import { PostModel } from "../Models/index.js";
import { BaseRepository } from "./base.repository.js";





export class PostRepository extends BaseRepository<IPost>{
    constructor(){
        super(PostModel)
    }
}