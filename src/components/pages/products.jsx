import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import BackChevron from '../atom/backChevron';
import TableHeader from '../atom/tableHeader';
import TableRow from '../atom/tableRow';
import DataTable from '../molecule/dataTable';
import { GET_PRODUCTS } from '../../api/getProducts';
import ShopifyGraphClient from '../../api/shopifyGraphqlClient';
import TextInput from '../atom/textInput';
import PaginationControls from '../atom/paginationControls';

const RECORDS_TO_SHOW = 10;
const Products = () => {
  const [handle, setHandle] = useState('');
  const [getProducts, { loading, error, data }] = useLazyQuery(GET_PRODUCTS, {
    client: ShopifyGraphClient,
  });

  function refreshData() {
    getProducts({ variables: { first: RECORDS_TO_SHOW } });
  }

  function getPrevPage() {
    const { cursor } = data.products.edges[0];
    getProducts({ variables: { handle, before: cursor, last: RECORDS_TO_SHOW } });
  }

  function getNextPage() {
    const lastIndex = data.products.edges.length - 1;
    const { cursor } = data.products.edges[lastIndex];
    getProducts({ variables: { handle, after: cursor, first: RECORDS_TO_SHOW } });
  }

  return (
    <div className="products">
      <div className="heading">
        <BackChevron to="/" />
        <h1>Products</h1>
      </div>
      {error
            && <div>An error occurred :(</div>}
      {loading
            && <div>...loading data</div>}
      <TextInput
        text="Product Handle: "
        name="productHandle"
        id="productHandle"
        value={handle}
        onChange={(e) => setHandle(e.target.value)}
      />
      <button type="button" onClick={refreshData} className="u-mt-medium u-mb-medium thin-btn">Refresh</button>
      <DataTable>
        <TableHeader headings={['ID', 'Handle', 'Title', 'Product Type', 'Vendor']} />
        {/* eslint-disable-next-line max-len */}
        {data && data.products.edges.map(({ node }) => <TableRow fields={[node.id, node.handle, node.title, node.productType, node.vendor]} />)}
      </DataTable>
      {data
      // eslint-disable-next-line max-len
        && <PaginationControls getNextPage={getNextPage} getPrevPage={getPrevPage} hasPreviousPage={data.products.pageInfo.hasPreviousPage} hasNextPage={data.products.pageInfo.hasNextPage} />}
    </div>
  );
};

export default Products;
