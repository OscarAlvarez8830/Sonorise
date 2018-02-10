import { combineReducers } from 'redux';
import session from './sessionReducer';
import entities from './entities';
import ui from './ui';

export default combineReducers({
  session,
  entities,
  ui,
});
