import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './graphql';
import App from './App';
import 'antd/dist/antd.less';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ApolloProvider client={client} >
      <App />
    </ApolloProvider>
  </BrowserRouter>
);
