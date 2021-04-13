import React from 'react';
import { Link } from 'react-router-dom';

class Index extends React.PureComponent {
  render() {
    return (
      <div className="u-t-center">
        <h1>Shopify Utility App</h1>
        <div className="menu-wrapper">
          <Link to="/config">
            <button type="button" className="btn-chunky">
              <span role="img" className="button-icon">⚙</span>
              Config
            </button>
          </Link>
          <Link to="/metafields">
            <button type="button" className="btn-chunky">
              <span role="img" className="button-icon">🗄️</span>
              Store Metafields
            </button>
          </Link>
          <Link to="/products">
            <button type="button" className="btn-chunky">
              <span role="img" className="button-icon">🛍️</span>
              View Products
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Index;
