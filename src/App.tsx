/* eslint-disable import/extensions */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/globalstyle';
import { AppProvider } from './hooks';

const App: React.FC = () => {
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
