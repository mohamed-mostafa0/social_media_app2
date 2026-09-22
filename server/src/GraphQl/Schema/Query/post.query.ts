import { GraphQLList } from "graphql";
import { PostType } from "../../Types/post.types.js";
import { GetFeedArgsType } from "../../Args/post.args.js";
import PostResolver from "../../Resolvers/post.resolver.js";


class PostQuery {

    private postResolver: PostResolver = new PostResolver()

    register() {
        return {
            getFeed: {
                type: new GraphQLList(PostType),
                args: GetFeedArgsType,
                resolve: this.postResolver.getFeed
            }
        }
    }
}

export default new PostQuery()
