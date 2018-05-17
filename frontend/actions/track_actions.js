import { thunkAction } from './general_actions';
import * as SearchApiUtil from 'util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';

export const receiveSearchResults = ({ trackIds, tracks, artists, artistIds }) => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    trackIds,
    tracks,
    artists,
    artistIds,
  };
};

export const clearSearchResults = () => {
  return {
    type: CLEAR_SEARCH_RESULTS,
  };
};

export const searchForTracks = thunkAction(
  SearchApiUtil.search,
  receiveSearchResults
);
