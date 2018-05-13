import { combineReducers } from 'redux';
import session, * as SessionSelectors from './session_reducer';
import entities, * as EntitySelectors from './entities';
import ui, * as UISelectors from './ui';

export default combineReducers({
  session,
  entities,
  ui,
});

export const {
  getErrors,
   getModal,
   getCurrentTrack,
   getPlayingState,
   getSearchResults,
 } = UISelectors;

export const { getCurrentUser } = SessionSelectors;

export const {
  getUserById,
  getPlaylistById,
  getPlaylistsByIdArray,
  getTrackById,
  getTracksByIdArray,
  getArtistById,
} = EntitySelectors;
