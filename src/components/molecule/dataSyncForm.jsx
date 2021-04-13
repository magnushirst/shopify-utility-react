import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLazyQuery } from '@apollo/client';
import ShopifyGraphClient from '../../api/shopifyGraphqlClient';
import { GET_BASIC_PRODUCTS } from '../../api/getBasicProducts';
import insensitiveSorting from '../../util';
import { GET_BASIC_METAFIELDS } from '../../api/getBasicMetafields';

const DataSyncForm = (props) => {
  const { config } = props;
  const [vendors, setVendors] = useState(config.vendors || []);
  const [productTypes, setProductTypes] = useState(config.productTypes || []);
  const [namespaces, setNamespaces] = useState(config.namespaces || []);

  function parseProducts(data) {
    const returnedVendors = [];
    const returnedProductTypes = [];
    // eslint-disable-next-line array-callback-return
    data.products.edges.map(({ node }) => {
      if (!returnedVendors.includes(node.vendor)) {
        returnedVendors.push(node.vendor);
      }
      if (!returnedProductTypes.includes(node.productType)) {
        returnedProductTypes.push(node.productType);
      }
    });
    setVendors(returnedVendors);
    setProductTypes(returnedProductTypes);
    // eslint-disable-next-line max-len
    props.saveConfig({ vendors: returnedVendors.sort(insensitiveSorting), productTypes: returnedProductTypes.sort(insensitiveSorting) });
  }

  function parseMetafields(data) {
    const returnedNamespaces = [];
    // eslint-disable-next-line array-callback-return
    data.shop.metafields.edges.map(({ node }) => {
      if (!returnedNamespaces.includes(node.namespace)) {
        returnedNamespaces.push(node.namespace);
      }
    });
    setNamespaces(returnedNamespaces);
    props.saveConfig({ namespaces: returnedNamespaces.sort(insensitiveSorting) });
  }

  const [getProducts] = useLazyQuery(GET_BASIC_PRODUCTS, {
    client: ShopifyGraphClient,
    onCompleted: (data) => { parseProducts(data); },
  });

  const [getMetafields] = useLazyQuery(GET_BASIC_METAFIELDS, {
    client: ShopifyGraphClient,
    onCompleted: (data) => { parseMetafields(data); },
  });

  function getProductFilters() {
    getProducts({ variables: { first: 250 } });
  }

  function getMetafieldFilters() {
    getMetafields({ variables: { first: 250 } });
  }

  return (
    <div className="u-mt-large">
      <h2>Sync Shop Data for Query Filters</h2>
      <div>
        <button
          type="button"
          onClick={() => {
            getProductFilters();
          }}
        >
          Sync Product Filters
        </button>
        <span>
          {' '}
          {vendors.length}
          {' '}
          Vendors and
          {' '}
          {productTypes.length}
          {' '}
          Product Types Synced
        </span>
      </div>
      <div className="u-mt-medium">
        <button
          type="button"
          onClick={() => {
            getMetafieldFilters();
          }}
        >
          Sync Metafields Filters
        </button>
        <span>
          {' '}
          {namespaces.length}
          {' '}
          Metafield Namespaces Synced
        </span>
      </div>
    </div>
  );
};

DataSyncForm.propTypes = {
  config: PropTypes.shape({
    vendors: PropTypes.arrayOf(PropTypes.string),
    productTypes: PropTypes.arrayOf(PropTypes.string),
    namespaces: PropTypes.arrayOf(PropTypes.string),
  }),
  saveConfig: PropTypes.func,
};

DataSyncForm.defaultProps = {
  config: {
    vendors: [],
    productTypes: [],
    namespaces: [],
  },
  saveConfig: () => {},
};

export default DataSyncForm;
