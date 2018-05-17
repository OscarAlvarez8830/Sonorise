import {
  RECEIVE_SEARCH_RESULTS,
  CLEAR_SEARCH_RESULTS,
} from 'actions/track_actions';

const defaultState = {
  trackIds: [],
  artistIds: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return { trackIds: action.trackIds, artistIds: action.artistIds };
    case CLEAR_SEARCH_RESULTS:
      return defaultState;
    default:
      return state;
  }
};

export const getTrackSearchResults = state => state.ui.searchResults.trackIds;
export const getArtistSearchResults = state => state.ui.searchResults.artistIds;
