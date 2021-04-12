import gql from 'graphql-tag';

const GET_METAFIELDS = gql`
query($namespace: String!, $after: String, $before: String, $first: Int, $last: Int){
  shop {
    metafields( first: $first, last: $last, after: $after, before: $before, namespace: $namespace) {
      pageInfo {
        hasNextPage
        hasPreviousPage 
      },
      edges {
        cursor,
        node {
          id,
          namespace,
          key,
          value,
        }
      }
    }
  } 
}`;

// eslint-disable-next-line import/prefer-default-export
export { GET_METAFIELDS };
