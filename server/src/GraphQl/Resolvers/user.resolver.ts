import { UserModel } from "../../DB/Models/index.js";
import { PostRepository, UserRepository } from "../../DB/Repositories/index.js";
import { BadRequestException } from "../../Utils/index.js";


class UserResolver {

    private userRepo: UserRepository = new UserRepository(UserModel)
    private postRepo:PostRepository = new PostRepository()

    getProfile = async (_: any, args: {page?:number , limit?:number }, context: any) => {
        const { page , limit } = args
        const userId = context.user.user._id

        const user = await this.userRepo.findDocumentById(userId)
        // console.log(user);
        
        const posts = await this.postRepo.postPagination({ownerId:userId} , {page , limit})
        if (!user) throw new BadRequestException("User not found")

        return {
            ...(user.toObject ? user.toObject() : user),
            posts
        }
        
    }
}

export default UserResolver