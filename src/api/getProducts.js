import gql from 'graphql-tag';

const GET_PRODUCTS = gql`
query($after: String, $before: String, $first: Int, $last: Int){
  products(first: $first, last: $last, after: $after, before: $before,) {
    pageInfo {
      hasNextPage
      hasPreviousPage 
    },
    edges {
      cursor,
      node {
          id,
          handle,
          title,
          productType,
          vendor
      }
    }
  }
}`;

// eslint-disable-next-line import/prefer-default-export
export { GET_PRODUCTS };
