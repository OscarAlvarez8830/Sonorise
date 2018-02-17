export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const PLAY_TRACK = 'PLAY_TRACK';
export const PAUSE_TRACK = 'PAUSE_TRACK';
export const UNPAUSE_TRACK = 'UNPAUSE_TRACK';
export const NEXT_TRACK = 'NEXT_TRACK';
export const PREV_TRACK = 'PREV_TRACK';

export const openModal = modal => {
  return {
    type: OPEN_MODAL,
    modal,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export const playTrack = trackId => {
  return {
    type: PLAY_TRACK,
    trackId,
  };
};

export const pauseTrack = () => {
  return {
    type: PAUSE_TRACK,
  };
};

export const unpauseTrack = () => {
  return {
    type: UNPAUSE_TRACK,
  };
};

export const nextTrack = () => {
  return {
    type: NEXT_TRACK,
  };
};

export const prevTrack = () => {
  return {
    type: PREV_TRACK,
  };
};
