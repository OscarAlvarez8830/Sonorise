import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArtistById, getCurrentTrack, getPlayingState } from 'reducers';
import { pauseTrack, unpauseTrack } from 'actions/ui_actions';

class TrackIndexItem extends Component {
  constructor(props) {
    super(props);
    const playButton = props.playing && props.isCurrentTrack;
    this.state = { playButton };
    this.showPlayButton = this.showPlayButton.bind(this);
    this.hidePlayButton = this.hidePlayButton.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isCurrentTrack && !this.state.playButton) this.setState({ playButton: true });
    if (!nextProps.isCurrentTrack && this.state.playButton) {
      this.setState({ playButton: false });
    }
  }

  playButton() {
    const { playing, isCurrentTrack, playTrack, pauseTrack, unpauseTrack } = this.props;
    let action;
    let klass = 'TrackIndexItem__icon';
    if (playing && isCurrentTrack) {
      klass += ' fas fa-pause';
      action = pauseTrack;
    } else {
      klass += ' fas fa-play';
      action = isCurrentTrack ? unpauseTrack : playTrack;
    }
    return <i className={klass} onClick={action}></i>
  }

  showPlayButton(e) {
    if (this.state.playButton) return;
    this.setState({ playButton: true });
  }

  hidePlayButton(e) {
    if (!this.state.playButton || this.props.isCurrentTrack) return;
    this.setState({ playButton: false });
  }

  icon() {
    if (this.state.playButton) {
      return this.playButton();
    } else {
      return <div className="TrackIndexItem__div--ord">{this.props.ord + 1}.</div>;
    }
  }

  render() {
    const { playTrack, track, ord, artist } = this.props;

    return (
      <li
        className="TrackIndexItem"
        onDoubleClick={playTrack}
        onMouseEnter={this.showPlayButton}
        onMouseLeave={this.hidePlayButton}
      >
        {this.icon()}
        <div className="TrackIndexItem__div">
          <div className="TrackIndexItem__div--title">
            <span className="TrackIndexItem__span--title">{track.title}</span>
          </div>
          <div className="TrackIndexItem__div--artist">
            {artist.name}
          </div>
        </div>
        <div className="TrackIndexItem__div--time">
          {track.duration}
        </div>
      </li>
    );
  }
}

const mapStateToProps = (state, { track }) => {
  const currentTrack = getCurrentTrack(state);
  const isCurrentTrack = currentTrack && currentTrack.id === track.id;
  return {
    artist: getArtistById(state, track.artistId),
    playing: getPlayingState(state),
    isCurrentTrack,
  };
};

export default connect(mapStateToProps, { pauseTrack })(TrackIndexItem);
