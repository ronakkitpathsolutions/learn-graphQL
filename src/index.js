import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import client from './graphql'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <ApolloProvider client={client} >
      <Provider store={store} >
        <App />
      </Provider>
    </ApolloProvider>
  </BrowserRouter>
);
