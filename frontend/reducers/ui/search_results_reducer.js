import {
  RECEIVE_SEARCH_RESULTS,
  CLEAR_SEARCH_RESULTS,
} from 'actions/track_actions';

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.trackIds;
    case CLEAR_SEARCH_RESULTS:
      return [];
    default:
      return state;
  }
};

export const getSearchResults = state => state.ui.searchResults;
