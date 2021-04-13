import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import BackChevronLink from '../atom/backChevronLink';
import TableHeader from '../atom/tableHeader';
import TableRow from '../atom/tableRow';
import DataTable from '../molecule/dataTable';
import { GET_METAFIELDS } from '../../api/getMetafields';
import ShopifyGraphClient from '../../api/shopifyGraphqlClient';
import PaginationControls from '../atom/paginationControls';
import SelectInput from '../atom/selectInput';

const RECORDS_TO_SHOW = 10;
const Metafields = () => {
  const config = window.config.get();
  const [namespace, setNamespace] = useState('');
  const [getMetafields, { loading, error, data }] = useLazyQuery(GET_METAFIELDS, {
    client: ShopifyGraphClient,
  });

  function refreshData() {
    getMetafields({ variables: { namespace, first: RECORDS_TO_SHOW } });
  }

  function getPrevPage() {
    const { cursor } = data.shop.metafields.edges[0];
    getMetafields({ variables: { namespace, before: cursor, last: RECORDS_TO_SHOW } });
  }

  function getNextPage() {
    const lastIndex = data.shop.metafields.edges.length - 1;
    const { cursor } = data.shop.metafields.edges[lastIndex];
    getMetafields({ variables: { namespace, after: cursor, first: RECORDS_TO_SHOW } });
  }

  return (
    <div className="metafields">
      <div className="heading">
        <BackChevronLink to="/" />
        <h1>Metafields</h1>
      </div>
      {error
                && <div>An error occurred :(</div>}
      {loading
                && <div>...loading data</div>}
      <SelectInput label="Namespace: " id="namespace" name="namespace" onChange={setNamespace} options={['', ...config.namespaces]} />
      <button type="button" onClick={refreshData} className="u-mt-medium u-mb-medium thin-btn">Refresh</button>
      <DataTable>
        <TableHeader headings={['ID', 'Name', 'Value', 'Namespace']} />
        {/* eslint-disable-next-line max-len */}
        {data && data.shop.metafields.edges.map(({ node }) => <TableRow fields={[node.id, node.key, node.value, node.namespace]} />)}
      </DataTable>
      {data
        // eslint-disable-next-line max-len
        && <PaginationControls getNextPage={getNextPage} getPrevPage={getPrevPage} hasPreviousPage={data.shop.metafields.pageInfo.hasPreviousPage} hasNextPage={data.shop.metafields.pageInfo.hasNextPage} />}
    </div>
  );
};

export default Metafields;
