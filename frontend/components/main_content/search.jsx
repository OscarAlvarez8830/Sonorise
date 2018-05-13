import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchForTracks, clearSearchResults } from 'actions/track_actions';
import { playSearchResult } from 'actions/ui_actions';
import { getSearchResults, getTracksByIdArray } from 'reducers';
import TrackIndex from './tracks/track_index';

class Search extends Component {
  state = { query: '' };

  componentWillUnmount() {
    clearTimeout(this.search);
    this.props.clearSearchResults();
  }

  update = e => {
    this.setState(
      { query: e.target.value },
      () => {
        clearTimeout(this.search);
        this.search = setTimeout(
          () => this.props.searchForTracks(this.state.query),
          500
        );
      }
    );
  }

  render() {
    return (
      <main className="Search">
        <input onChange={this.update} value={this.state.query} />
        <TrackIndex tracks={this.props.results} playTrack={this.props.playSearchResult} />
      </main>
    );
  }
}

const mapStateToProps = state => {
  const trackIds = getSearchResults(state);
  const results = getTracksByIdArray(state, trackIds);
  return {
    results,
  };
};

export default connect(
  mapStateToProps,
  {
    searchForTracks,
    clearSearchResults,
    playSearchResult,
  }
)(Search);
