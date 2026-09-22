import { GraphQLBoolean, GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { UserType } from "./user.types.js";


export const PostType = new GraphQLObjectType({
    name: "PostType",
    fields: () => ({
        _id: { type: GraphQLID },
        describtion: { type: GraphQLString },
        attachments: { type: new GraphQLList(GraphQLString) },
        allowComments: { type: GraphQLBoolean },
        commentsCount: { type: GraphQLInt },
        owner: {
            type: UserType,
            // ownerId is the stored field — the resolver populates it as "owner"
            resolve: (post: any) => post.ownerId
        },
        tags: {
            type: new GraphQLList(UserType),
            resolve: (post: any) => post.tags ?? []
        }
    })
})
