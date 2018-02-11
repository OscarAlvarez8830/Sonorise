import { RECEIVE_ERRORS, CLEAR_ERRORS } from 'actions/general_actions';

export default (state = {}, action) => {
  switch (action.type) {
  case RECEIVE_ERRORS:
    return action.errors.responseJSON;
  case CLEAR_ERRORS:
    return {};
  default:
    return state;
  }
};

export const getErrors = state => {
  return state.ui.errors;
};
