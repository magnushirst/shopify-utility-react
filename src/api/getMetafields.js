import {gql} from "graphql-tag";

export const GET_METAFIELDS = gql`
    query($namespace: String!){
    shop {
        metafields( first: 20, namespace: $namespace) {
            edges {
                node {
                id
                namespace
                key
                value
                }
            }
        } 
    }
}`;