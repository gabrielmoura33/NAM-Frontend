import React from 'react';
import { Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Collection from '../pages/Collection';
import CreateDocument from '../pages/CreateDocument';

import Route from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" isPrivate component={Dashboard} />
      <Route path="/acervo/:id" exact isPrivate component={Collection} />
      <Route
        path="/acervo/:id/documento"
        isPrivate
        component={CreateDocument}
      />
    </Switch>
  );
};
export default Routes;
