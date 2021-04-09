import { gql } from 'graphql-tag';

const GET_METAFIELDS = gql`
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

// eslint-disable-next-line import/prefer-default-export
export { GET_METAFIELDS };
