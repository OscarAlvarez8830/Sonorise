import { combineReducers } from 'redux';
import errors, * as ErrorSelectors from './errors_reducer';
import modal, * as ModalSelectors from './modal_reducer';
import playing, * as PlayingSelectors from './playing_reducer';
import searchResults, * as SearchSelectors from './search_results_reducer';

export default combineReducers({
  errors,
  modal,
  playing,
  searchResults,
});

export const { getErrors } = ErrorSelectors;

export const { getModal } = ModalSelectors;

export const { getCurrentTrack, getPlayingState } = PlayingSelectors;

export const { getTrackSearchResults, getArtistSearchResults } = SearchSelectors;
