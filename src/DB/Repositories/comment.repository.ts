import type { IComment } from "../../Common/index.js";
import { CommentModel } from "../Models/comment.model.js";
import { BaseRepository } from "./base.repository.js";




export class CommentRepository extends BaseRepository<IComment>{
    constructor(){
        super(CommentModel)
    }
}