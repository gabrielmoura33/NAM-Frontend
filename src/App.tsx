/* eslint-disable import/extensions */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/globalstyle';
import { AppProvider } from './hooks';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop>
        <AppProvider>
          <Routes />
          <GlobalStyle />
        </AppProvider>
      </ScrollToTop>
    </Router>
  );
};

export default App;
