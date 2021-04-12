import React from 'react';
import PropTypes from 'prop-types';

const PaginationControls = ({
  hasPreviousPage, hasNextPage, getPrevPage, getNextPage,
}) => (
  <div className="u-mt-medium">
    {hasPreviousPage
        && (
        <button type="button" className="u-mr-medium" onClick={getPrevPage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </button>
        )}
    {hasNextPage
        && (
        <button type="button" onClick={getNextPage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
        )}
  </div>
);

PaginationControls.propTypes = {
  hasPreviousPage: PropTypes.bool,
  hasNextPage: PropTypes.bool,
  getPrevPage: PropTypes.func,
  getNextPage: PropTypes.func,
};

PaginationControls.defaultProps = {
  hasPreviousPage: false,
  hasNextPage: false,
  getPrevPage: () => {},
  getNextPage: () => {},
};

export default PaginationControls;
