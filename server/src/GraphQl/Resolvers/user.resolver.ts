import mongoose from "mongoose";
import { UserModel } from "../../DB/Models/index.js";
import { UserRepository } from "../../DB/Repositories/index.js";
import { BadRequestException } from "../../Utils/index.js";


class UserResolver {

    private userRepo: UserRepository = new UserRepository(UserModel)

    getProfile = async (_: any, args: { userId: string }, context: any) => {
        const { userId } = args

        const user = await this.userRepo.findDocumentById(
            new mongoose.Types.ObjectId(userId) as unknown as mongoose.Types.ObjectId
        )

        if (!user) throw new BadRequestException("User not found")

        return user
    }
}

export default UserResolver