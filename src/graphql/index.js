import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"

const link = createHttpLink({
    uri: 'https://graphqlzero.almansi.me/api',
    credentials: 'same-origin'
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    ssrMode: true,
    link
})

export default client