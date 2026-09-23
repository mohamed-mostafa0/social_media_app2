import { GraphQLInt} from "graphql";


export const GetProfileArgsType = {
    page: { type:GraphQLInt , defaultValue:1 },
    limit:{type:GraphQLInt , defaultValue:10}
    
}