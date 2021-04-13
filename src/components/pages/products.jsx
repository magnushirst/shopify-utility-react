import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import BackChevronLink from '../atom/backChevronLink';
import TableHeader from '../atom/tableHeader';
import TableRow from '../atom/tableRow';
import DataTable from '../molecule/dataTable';
import { GET_PRODUCTS } from '../../api/getProducts';
import ShopifyGraphClient from '../../api/shopifyGraphqlClient';
import PaginationControls from '../atom/paginationControls';
import ViewDetailsButton from '../atom/viewDetailsButton';
import SelectInput from '../atom/selectInput';

const RECORDS_TO_SHOW = 10;
const Products = () => {
  const config = window.config.get();
  const [vendor, setVendor] = useState('');
  const [productType, setProductType] = useState('');
  const [getProducts, { loading, error, data }] = useLazyQuery(GET_PRODUCTS, {
    client: ShopifyGraphClient,
  });

  function getQueryFilter() {
    let query = '';
    query = vendor ? `${query + vendor},` : query;
    query = productType ? `${query + productType},` : query;
    return query;
  }

  function refreshData() {
    const query = getQueryFilter();
    getProducts({ variables: { first: RECORDS_TO_SHOW, query } });
  }

  function getPrevPage() {
    const { cursor } = data.products.edges[0];
    const query = getQueryFilter();
    getProducts({ variables: { before: cursor, last: RECORDS_TO_SHOW, query } });
  }

  function getNextPage() {
    const lastIndex = data.products.edges.length - 1;
    const { cursor } = data.products.edges[lastIndex];
    const query = getQueryFilter();
    getProducts({ variables: { after: cursor, first: RECORDS_TO_SHOW, query } });
  }

  return (
    <div className="products">
      <div className="heading">
        <BackChevronLink to="/" />
        <h1>Products</h1>
      </div>
      {error
            && <div>An error occurred :(</div>}
      {loading
            && <div>...loading data</div>}
      <SelectInput label="Vendor: " id="vendor" name="vendor" onChange={setVendor} options={['', ...config.vendors]} />
      <SelectInput className="u-mt-small" label="Product Type: " id="productType" name="productType" onChange={setProductType} options={['', ...config.productTypes]} />
      <button type="button" onClick={refreshData} className="u-mt-medium u-mb-medium thin-btn">Refresh</button>
      <DataTable>
        <TableHeader headings={['ID', 'Handle', 'Title', 'Product Type', 'Vendor', 'Actions']} />
        {/* eslint-disable-next-line max-len */}
        {data && data.products.edges.map(({ node }) => <TableRow fields={[node.id, node.handle, node.title, node.productType, node.vendor, <ViewDetailsButton pathname="/product" id={node.id} />]} />)}
      </DataTable>
      {data
      // eslint-disable-next-line max-len
        && <PaginationControls getNextPage={getNextPage} getPrevPage={getPrevPage} hasPreviousPage={data.products.pageInfo.hasPreviousPage} hasNextPage={data.products.pageInfo.hasNextPage} />}
    </div>
  );
};

export default Products;
