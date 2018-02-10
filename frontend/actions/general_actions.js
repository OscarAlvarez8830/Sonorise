export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveErrors = error => {
  return {
    type: RECEIVE_ERRORS,
    error
  };
};

export const thunkAction = (ajaxFunc, successCallback) => {
  return arg => dispatch => {
    return ajaxFunc(arg).then(response => {
      return successCallback(response);
    }, err => {
      return dispatch(receiveErrors(err));
    });
  };
};
