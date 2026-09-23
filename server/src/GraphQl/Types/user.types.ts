import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { PaginatedPostType } from "./post.types.js";


export const UserType: GraphQLObjectType = new GraphQLObjectType({
    name: "UserType",
    fields: () => ({
        _id: { type: GraphQLID },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        profilePicture: { type: GraphQLString },
        coverPicture: { type: GraphQLString },
        gender: { type: GraphQLString },
        posts: {
            type: PaginatedPostType,
            resolve: (user: any) => user.posts
        }
    })
})