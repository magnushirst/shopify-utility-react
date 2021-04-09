import {ApolloClient, InMemoryCache} from "@apollo/client";

const config = window.config.get()

export const ShopifyGraphClient = new ApolloClient({
    uri: `${config.url}/admin/api/2021-04/graphql.json`,
    cache: new InMemoryCache(),
    credentials: 'omit',
    headers: {
        'Authorization': `Basic ${window.btoa(`${config.apiKey}:${config.secret}`)}`
    }
});

