import React from 'react';
import { Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Collection from '../pages/Collection';
import CreateDocument from '../pages/CreateDocument';
import UpdateDocument from '../pages/UpdateDocument';

import UpdateProfile from '../pages/UpdateProfile';

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
        exact
      />
      <Route
        path="/acervo/:id/documento/:document_id"
        isPrivate
        component={UpdateDocument}
      />
      <Route path="/profile" isPrivate component={UpdateProfile} />
    </Switch>
  );
};
export default Routes;
