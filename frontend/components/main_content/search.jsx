import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, NavLink } from 'react-router-dom';
import { searchForTracks, clearSearchResults } from 'actions/track_actions';
import { playTrack } from 'actions/ui_actions';
import { getTrackSearchResults, getArtistSearchResults, getArtistsByIdArray } from 'reducers';
import TrackIndex from './tracks/track_index';
import ArtistIndex from './artists/artist_index';

class Search extends Component {
  state = { query: '' };

  componentWillUnmount() {
    clearTimeout(this.search);
    this.props.clearSearchResults();
  }

  navLinks() {
    if (this.props.trackIds.length || this.props.artists.length) {
      return (
        <nav>
          <NavLink to="/search" className="Search__navLink">Tracks</NavLink>
          <NavLink to="/search/artists" className="Search__navLink">Artists</NavLink>
        </nav>
      );
    }
  }

  playTrack = ord => {
    return this.props.playTrack(this.props.trackIds, ord);
  }

  update = e => {
    this.setState(
      { query: e.target.value },
      () => {
        clearTimeout(this.search);
        this.search = setTimeout(
          () => {
            if (this.state.query.length){
              this.props.searchForTracks(this.state.query)
            }
          },
          500
        );
      }
    );
  }

  render() {
    return (
      <main className="Search">
        <section className="Search__section">
          <label className="Search__label">
            Search for tracks
            <input
              className="Search__input"
              onChange={this.update}
              placeholder="Start typing..."
              value={this.state.query} />
          </label>
        </section>

        {this.navLinks()}

        <Switch>
          <Route path="/search/artists" render={routeProps => (
              <ArtistIndex
                {...routeProps}
                artists={this.props.artists} />
            )} />

          <Route
            path="/search"
            render={routeProps => (
              <TrackIndex
                {...routeProps}
                trackIds={this.props.trackIds}
                playTrack={this.playTrack} />
            )} />
        </Switch>
      </main>
    );
  }
}

const mapStateToProps = state => {
  const artistIds = getArtistSearchResults(state);
  const artists = getArtistsByIdArray(state, artistIds);
  return {
    trackIds: getTrackSearchResults(state),
    artists,
  };
};

export default connect(
  mapStateToProps,
  {
    searchForTracks,
    clearSearchResults,
    playTrack,
  }
)(Search);
