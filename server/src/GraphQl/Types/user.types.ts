import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";


export const UserType = new GraphQLObjectType({
    name: "UserType",
    fields: {
        _id: { type: GraphQLID },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        profilePicture: { type: GraphQLString },
        coverPicture: { type: GraphQLString },
        gender: { type: GraphQLString },
    }
})