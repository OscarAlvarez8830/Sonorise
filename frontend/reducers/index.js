import { combineReducers } from 'redux';
import session from './session_reducer';
import entities from './entities';
import ui from './ui';

export default combineReducers({
  session,
  entities,
  ui,
});
