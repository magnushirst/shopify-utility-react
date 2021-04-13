import gql from 'graphql-tag';

const GET_BASIC_PRODUCTS = gql`
query($after: String, $first: Int){
  products(first: $first, after: $after,) {
    pageInfo {
      hasNextPage
      hasPreviousPage 
    },
    edges {
      cursor,
      node {
          productType,
          vendor
      }
    }
  }
}`;

// eslint-disable-next-line import/prefer-default-export
export { GET_BASIC_PRODUCTS };
