import {
  PLAY_TRACK,
  PAUSE_TRACK,
  UNPAUSE_TRACK,
  NEXT_TRACK,
  PREV_TRACK,
} from 'actions/ui_actions';

import { getTrackById } from 'reducers';

const defaultState = {
  currentTrackOrd: null,
  playing: false,
  queue: [],
  loop: false,
  playlistId: null,
};

export default (state = defaultState, action) => {
  let currentTrackOrd;
  let queue;
  let playing;
  switch (action.type) {
  case PLAY_TRACK:
    return Object.assign(
      {},
      state,
      {
        currentTrackOrd: action.currentTrackOrd,
        queue: action.queue,
        playing: true,
        playlistId: action.playlistId,
      }
    );
  case PAUSE_TRACK:
    return Object.assign({}, state, { playing: false });
  case UNPAUSE_TRACK:
    return Object.assign({}, state, { playing: true });
  case NEXT_TRACK:
    currentTrackOrd = state.currentTrackOrd + 1;

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

export const getCurrentTrack = state => {
  const { queue, currentTrackOrd } = state.ui.playing;
  if (currentTrackOrd === null) return null;
  const trackId = queue[currentTrackOrd];
  return getTrackById(state, trackId);
}

export const getPlayingState = state => {
  return state.ui.playing.playing;
}
