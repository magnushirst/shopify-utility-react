import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ fields }) => (
  <tr>
    {fields.map((field) => (
      <td>
        {field}
      </td>
    ))}
  </tr>
);

TableRow.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.string),
};

TableRow.defaultProps = {
  fields: [''],
};

export default TableRow;
