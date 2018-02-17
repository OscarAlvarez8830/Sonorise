import React from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import Sidebar from './sidebar';
import YourMusic from './collection_container';
import Home from './home_container';
import Account from './account_container';
import PlaylistShow from './playlists/playlist_show';
import { getModal } from 'reducers';

const Main = ({ modal }) => {
  return (
    <main className="Main">
      { modal }
      <Sidebar />
      <section className="Main__section">
        <Switch>
          <ProtectedRoute path="/browse" component={ Home } />
          <ProtectedRoute path="/collection" component={ YourMusic } />
          <ProtectedRoute path="/playlist/:id" component={ PlaylistShow } />
          <ProtectedRoute path="/account" component={ Account } />
        </Switch>
      </section>
    </main>
  );
};

const mapStateToProps = state => {
  return {
    modal: getModal(state),
  };
};

export default connect(mapStateToProps)(Main);
