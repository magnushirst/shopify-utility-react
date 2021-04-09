import {gql} from "graphql-tag";

export const GET_METAFIELDS = gql`
    query {
        shop {
            metafields(first: 10) {
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