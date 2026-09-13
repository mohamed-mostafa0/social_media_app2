import type { Model } from "mongoose";
import type { IUser } from "../../Common/index.js";
import { BaseRepository } from "./base.repository.js";
import { UserModel } from "../Models/user.model.js";




export class UserRepository extends BaseRepository<IUser>{

    constructor(protected _usermodel:Model<IUser>){
        super(UserModel)
    }
}