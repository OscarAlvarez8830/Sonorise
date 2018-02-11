import React from 'react';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import Sidebar from './sidebar';
import YourMusic from './collection_container';
import Home from './home_container';
import Account from './account_container';

export default props => {
  return (
    <main className="Main">
      <Sidebar />
      <section className="Main__section">
        <Switch>
          <ProtectedRoute path="/browse" component={ Home } />
          <ProtectedRoute path="/collection" component={ YourMusic } />
          <ProtectedRoute path="/account" component={ Account } />
        </Switch>
      </section>
    </main>
  );
};
