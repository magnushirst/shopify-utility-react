import React from 'react';
import {Link} from "react-router-dom"

function Index() {
    return (
        <div className="App">
            <h1>Shopify Utility App</h1>
            <div className="menu-wrapper">
                <Link to="/config">
                    <button type="button">
                        <span role="img" aria-label="books">📚</span>
                        Config
                    </button>
                </Link>
                <Link to="/metafields">
                    <button type="button">
                        <span role="img" aria-label="books">🙏</span>
                        Metafields
                    </button>
                </Link>
                <Link to="/products">
                    <button type="button">
                        <span role="img" aria-label="books">🙏</span>
                        Products
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Index;
