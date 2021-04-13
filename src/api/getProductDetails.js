import gql from 'graphql-tag';

const GET_PRODUCT = gql`
query($id: ID!){
  product(id: $id) {
    id
    handle
    title
    descriptionHtml
    metafields(first: 10) {
      edges {
        node {
          id
          key
          value
          namespace
        }
      }
    }
    onlineStoreUrl
    productType
    tags
    totalInventory
    vendor
    images(first: 10) {
      edges {
        node {
          id
          originalSrc
        }
      }
    },
    feedback {
      summary
    }
    hasOnlyDefaultVariant
    hasOutOfStockVariants
    mediaCount
    onlineStorePreviewUrl
    onlineStoreUrl
    options {
      name
      values
    }
    privateMetafields(first: 10) {
      edges {
        node {
          key
          value
          namespace
        }
      }
    }
    seo {
      description
      title
    }
    status
    variants(first: 10) {
      edges {
        node {
          title
          price
          sku
        }
      }
    }
  }
}
`;

// eslint-disable-next-line import/prefer-default-export
export { GET_PRODUCT };
