import { combineReducers } from 'redux';
import errors from './errors_reducer';
import modal from './modal_reducer';
import playing from './playing_reducer';

export default combineReducers({
  errors,
  modal,
  playing,
});
