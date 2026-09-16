import type { Model } from "mongoose"
import type { IFriendship } from "../../Common/index.js"
import { BaseRepository } from "./base.repository.js"
import { FriendshipModel } from "../Models/friendship.model.js"




export class FriendshipRepository extends BaseRepository<IFriendship> {

    constructor(){
        super(FriendshipModel)
    }
}