import { combineReducers } from 'redux';
import errors, * as ErrorSelectors from './errors_reducer';
import modal, * as ModalSelectors from './modal_reducer';
import playing, * as PlayingSelectors from './playing_reducer';

export default combineReducers({
  errors,
  modal,
  playing,
});

export const { getErrors } = ErrorSelectors;

export const { getModal } = ModalSelectors;

export const { getCurrentTrack } = PlayingSelectors;
