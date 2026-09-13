import type { Model } from "mongoose";
import type { IBlackListedToken } from "../../Common/index.js";
import { BaseRepository } from "./index.js";
import { BlackListedTokenModel } from "../Models/black-listed-token.model.js";





export class BlackListedTokenRepository extends BaseRepository<IBlackListedToken>{

    constructor(protected _blackListed:Model<IBlackListedToken>){
        super(BlackListedTokenModel)
    }
}