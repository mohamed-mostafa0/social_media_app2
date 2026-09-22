import { GraphQLInt } from "graphql";


export const GetFeedArgsType = {
    page:  { type: GraphQLInt, defaultValue: 1 },
    limit: { type: GraphQLInt, defaultValue: 10 }
}
