import { GraphQLNonNull, GraphQLString } from "graphql";


export const GetProfileArgsType = {
    userId: { type: new GraphQLNonNull(GraphQLString) }
}