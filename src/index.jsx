import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Index from './components/pages';
import Config from './components/pages/config';
import Metafields from './components/pages/metafields';
import Products from './components/pages/products';
import Product from './components/pages/product';

ReactDOM.render(
  <Router>
    <div>
      <main>
        <Route exact path="/" component={Index} />
        <Route exact path="/config" component={Config} />
        <Route exact path="/metafields" component={Metafields} />
        <Route exact path="/products" component={Products} />
        <Route path="/product" component={Product} />
      </main>
    </div>
  </Router>,
  document.getElementById('pageWrapper'),
);
