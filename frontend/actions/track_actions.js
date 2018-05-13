import { thunkAction } from './general_actions';
import * as TrackApiUtil from 'util/track_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';

export const receiveSearchResults = ({ trackIds, tracks, artists, }) => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    trackIds,
    tracks,
    artists,
  };
};

export const clearSearchResults = () => {
  return {
    type: CLEAR_SEARCH_RESULTS,
  };
};

export const searchForTracks = thunkAction(
  TrackApiUtil.searchForTracks,
  receiveSearchResults
);
