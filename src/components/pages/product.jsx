import React from 'react';
import { useQuery } from '@apollo/client';
import ShopifyGraphClient from '../../api/shopifyGraphqlClient';
import { GET_PRODUCT } from '../../api/getProductDetails';
import ProductDetails from '../organism/productDetails';

const Product = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const productId = urlParams.get('id');

  const { data, loading } = useQuery(GET_PRODUCT, {
    client: ShopifyGraphClient,
    variables: { id: productId },
  });

  return (
    <div className="product">
      <div className="heading">
        <h1>
          {data
            && data.product.title}
          {loading
            && 'Loading...'}
        </h1>
      </div>
      {data
      && <ProductDetails data={data} />}
    </div>
  );
};
export default Product;
