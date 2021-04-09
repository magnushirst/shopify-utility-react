import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css';

import {HashRouter as Router, Route} from 'react-router-dom'

import Index from "./components/pages/index"
import Config from "./components/pages/config"
import Metafields from "./components/pages/metafields"
import Products from "./components/pages/products"
import {ApolloProvider} from "@apollo/client";
import {ShopifyGraphClient} from "./api/shopifyGraphqlClient";

ReactDOM.render(
    <Router>
            <ApolloProvider client={ShopifyGraphClient}>
            <div>
                <main>
                    <Route exact path="/" component={Index}/>
                    <Route path="/config" component={Config}/>
                    <Route path="/metafields" component={Metafields}/>
                    <Route path="/products" component={Products}/>
                </main>
            </div>
        </ApolloProvider>
    </Router>,
    document.getElementById("pageWrapper")
)