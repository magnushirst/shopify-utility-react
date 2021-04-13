import React from 'react';
import PropTypes from 'prop-types';
import DataTable from '../molecule/dataTable';
import TableHeader from '../atom/tableHeader';
import TableRow from '../atom/tableRow';

function ProductDetails(props) {
  const { data } = props;
  return (
    <div className="productDetails">
      <h2>Details</h2>
      <DataTable>
        <TableRow fields={['Handle', data.product.handle]} />
        <TableRow fields={['Product Type', data.product.productType]} />
        <TableRow fields={['Total Inventory', data.product.totalInventory]} />
        <TableRow fields={['Vendor', data.product.vendor]} />
        <TableRow fields={['Description', data.product.descriptionHtml]} />
        <TableRow fields={['Store Url', data.product.onlineStoreUrl]} />
        <TableRow fields={['Store Preview Url', data.product.onlineStorePreviewUrl]} />
        <TableRow fields={['Has Only Default Variant', data.product.hasOnlyDefaultVariant.toString()]} />
        <TableRow fields={['Has Out Of Stock Variants', data.product.hasOutOfStockVariants.toString()]} />
        <TableRow fields={['Media Count', data.product.mediaCount]} />
        <TableRow fields={['Status', data.product.status]} />
      </DataTable>

      {data.product.tags.length > 0
      && (
      <div>
        <h2>Tags</h2>
        <div className="fieldWrapper">
          <ol>
            {data.product.tags.map((tag) => (
              <li>
                {tag}
              </li>
            ))}
          </ol>
        </div>
      </div>
      )}

      {data.product.images.edges.length > 0
      && (
      <div>
        <h2>Images</h2>
        <div className="fieldWrapper">
          {data.product.images.edges.map(({ node }) => (
            <img className="productImage u-mr-medium" src={node.originalSrc} alt={node.id} />
          ))}
        </div>
      </div>
      )}
      {data.product.metafields.edges.length > 0
        && (
        <div>
          <h2>Metafields</h2>
          <DataTable>
            <TableHeader headings={['Name', 'Value', 'Namespace']} />
            {data.product.metafields.edges.map(({ node }) => (
              <TableRow
                fields={[node.key, node.value, node.namespace]}
              />
            ))}
          </DataTable>
        </div>
        )}

      {data.product.privateMetafields.edges.length > 0
        && (
        <div>
          <h2>Private Metafields</h2>
          <DataTable>
            <TableHeader headings={['Name', 'Value', 'Namespace']} />
            {/* eslint-disable-next-line max-len */}
            {data.product.privateMetafields.edges.map(({ node }) => <TableRow fields={[node.key, node.value, node.namespace]} />)}
          </DataTable>
        </div>
        )}

      {data.product.options.length > 0
      && (
      <div>
        <h2>Options</h2>
        <DataTable>
          <TableHeader headings={['Name', 'Values']} />
          {data.product.options.map((option) => <TableRow fields={[option.name, option.values]} />)}
        </DataTable>
      </div>
      )}

      {data.product.options.length > 0
      && (
      <div>
        <h2>Variants</h2>
        <DataTable>
          <TableHeader headings={['SKU', 'Title', 'Price']} />
          {/* eslint-disable-next-line max-len */}
          {data.product.variants.edges.map(({ node }) => <TableRow fields={[node.sku, node.title, node.price]} />)}
        </DataTable>
      </div>
      )}
    </div>
  );
}

ProductDetails.propTypes = {
  data: PropTypes.shape({
    product: PropTypes.shape({
      handle: PropTypes.string,
      descriptionHtml: PropTypes.string,
      productType: PropTypes.string,
      totalInventory: PropTypes.number,
      vendor: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      images: PropTypes.arrayOf(PropTypes.object),
      metafields: PropTypes.arrayOf(PropTypes.object),
      privateMetafields: PropTypes.arrayOf(PropTypes.object),
      options: PropTypes.arrayOf(PropTypes.object),
      variants: PropTypes.arrayOf(PropTypes.object),
      onlineStoreUrl: PropTypes.string,
      onlineStorePreviewUrl: PropTypes.string,
      hasOnlyDefaultVariant: PropTypes.bool,
      hasOutOfStockVariants: PropTypes.bool,
      mediaCount: PropTypes.number,
      status: PropTypes.string,
    }),
  }),
};

ProductDetails.defaultProps = {
  data: {},
};

export default ProductDetails;
