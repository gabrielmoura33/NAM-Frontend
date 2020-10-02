import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/globalstyle';
import { AppProvider } from './hooks';
import { useAuth } from './hooks/auth';

const App: React.FC = () => {
  const { user } = useAuth();

  return (
    <Router>
      <AppProvider>
        <Routes />
        <GlobalStyle />
      </AppProvider>
    </Router>
  );
};

export default App;
