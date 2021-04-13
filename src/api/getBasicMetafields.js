import gql from 'graphql-tag';

const GET_BASIC_METAFIELDS = gql`
query($after: String, $first: Int,){
  shop {
    metafields( first: $first, after: $after,) {
      edges {
        node {
          id,
          namespace,
        }
      }
    }
  } 
}`;

// eslint-disable-next-line import/prefer-default-export
export { GET_BASIC_METAFIELDS };
