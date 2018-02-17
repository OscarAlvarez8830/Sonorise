import {
  PLAY_TRACK,
  PAUSE_TRACK,
  UNPAUSE_TRACK,
  NEXT_TRACK,
  PREV_TRACK,
} from 'actions/ui_actions';

const defaultState = {
  currentTrackOrd: null,
  playing: false,
  queue: [],
  loop: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
  case PLAY_TRACK:
    const { currentTrackOrd, queue } = action;
    return Object.assign({}, state, { currentTrackOrd, queue, playing: true });
  case PAUSE_TRACK:
    return Object.assign({}, state, { playing: false });
  case UNPAUSE_TRACK:
    return Object.assign({}, state, { playing: true });
  case NEXT_TRACK:
    let currentTrackOrd = state.currentTrackOrd + 1;
    let playing;

    if (currentTrackOrd >= state.queue.length) {
      if (state.loop) {
        currentTrackOrd = 0;
        playing = true;
      } else {
        currentTrackOrd = null;
        playing = false;
      }
    }

    return Object.assign({}, state, { currentTrackOrd, playing });
  case PREV_TRACK:
    if (!state.currentTrackOrd) {
      return state;
    } else if (state.playing) {
      return Object.assign(
        {},
        state,
        { currentTrackOrd: state.currentTrackOrd - 1, playing: true, }
      );
    }
  default:
    return state;
  }
}

export const getCurrentTrack = ({ entities, ui }) => {
  const { tracks } = entities;
  const { playing: { queue, currentTrackOrd } };
  const trackId = queue[currentTrackOrd];
  return tracks[trackId] || {};
}
