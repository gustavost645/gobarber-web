import React from 'react';

import GlobalStyle from './styles/gobal';
import SignIn from './pages/Signin';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AuthProvider>
      <SignIn />
    </AuthProvider>
  </>
);

export default App;
