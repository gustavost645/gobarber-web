import React from 'react';

import GlobalStyle from './styles/gobal';
import SignIn from './pages/Signin';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AppProvider>
      <SignIn />
    </AppProvider>
  </>
);

export default App;
