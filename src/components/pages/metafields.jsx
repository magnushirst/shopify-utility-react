import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import BackChevron from '../atom/backChevron';
import TableHeader from '../atom/tableHeader';
import TableRow from '../atom/tableRow';
import DataTable from '../molecule/dataTable';
import { GET_METAFIELDS } from '../../api/getMetafields';
import ShopifyGraphClient from '../../api/shopifyGraphqlClient';
import TextInput from '../atom/textInput';

const Metafields = () => {
  const [namespaceInput, setNamespaceInput] = useState('');
  const [namespace, setNamespace] = useState('');
  const [getMetafields, { loading, error, data }] = useLazyQuery(GET_METAFIELDS, {
    client: ShopifyGraphClient,
    variables: { namespace },
  });

  function refreshData() {
    setNamespace(namespaceInput);
    getMetafields();
  }

  return (
    <div className="about">
      <div className="heading">
        <BackChevron to="/" />
        <h1>Metafields</h1>
      </div>
      {error
                && <div>An error occurred :(</div>}
      {loading
                && <div>...loading data</div>}
      <TextInput
        text="namespace: "
        name="namespace"
        id="namespace"
        value={namespaceInput}
        onChange={(e) => setNamespaceInput(e.target.value)}
      />
      <button type="button" onClick={refreshData} className="u-mt-medium u-mb-medium thin-btn">Refresh</button>
      <DataTable>
        <TableHeader headings={['ID', 'Name', 'Value', 'Namespace']} />
        {/* eslint-disable-next-line max-len */}
        {data && data.shop.metafields.edges.map(({ node }) => <TableRow fields={[node.id, node.key, node.value, node.namespace]} />)}
      </DataTable>
    </div>
  );
};

export default Metafields;
