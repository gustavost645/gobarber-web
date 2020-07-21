import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/gobal';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyle />
    <AppProvider>
      <Routes />
    </AppProvider>
  </BrowserRouter>
);

export default App;
