import { CommentModel } from "../../DB/Models/index.js";
import { CommentRepository, PostRepository } from "../../DB/Repositories/index.js";


class PostResolver {

    private postRepo: PostRepository = new PostRepository()
    private commentRepo: CommentRepository = new CommentRepository()

    getFeed = async (_: any, args: { page: number; limit: number }, context: any) => {
        const { page, limit } = args

        const result = await this.postRepo.postPagination(
            {},
            {
                page,
                limit,
                populate: {
                    path: "ownerId",
                    select: "firstName lastName profilePicture gender"
                },
                lean: true
            }
        )

        const posts = await Promise.all(
            result.docs.map(async (post: any) => {
                const commentsCount = await CommentModel.countDocuments({
                    refId: post._id,
                    onModel: "Post"
                })
                return { ...post, commentsCount }
            })
        )

        return posts
    }
}

export default PostResolver
