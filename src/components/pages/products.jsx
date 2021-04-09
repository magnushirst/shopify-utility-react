import React from 'react';
import BackChevron from '../atom/backChevron';

class Products extends React.PureComponent {
  render() {
    return (
      <div className="about">
        <div className="heading">
          <BackChevron to="/" />
          <h1>Products</h1>
        </div>
      </div>
    );
  }
}

export default Products;
