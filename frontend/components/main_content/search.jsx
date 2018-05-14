import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchForTracks, clearSearchResults } from 'actions/track_actions';
import { playTrack } from 'actions/ui_actions';
import { getSearchResults, getTracksByIdArray } from 'reducers';
import TrackIndex from './tracks/track_index';

class Search extends Component {
  state = { query: '' };

  componentWillUnmount() {
    clearTimeout(this.search);
    this.props.clearSearchResults();
  }

  playTrack = ord => {
    return this.props.playTrack(this.props.resultIds, ord);
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
        <TrackIndex trackIds={this.props.resultIds} playTrack={this.playTrack} />
      </main>
    );
  }
}

const mapStateToProps = state => {
  const resultIds = getSearchResults(state);
  return {
    resultIds,
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
