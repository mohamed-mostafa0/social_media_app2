import type { IFollow } from "../../Common/index.js"
import { BaseRepository } from "./base.repository.js"
import { FollowModel } from "../Models/friendship.model.js"




export class FollowRepository extends BaseRepository<IFollow> {

    constructor(){
        super(FollowModel)
    }
}