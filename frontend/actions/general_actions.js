export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const thunkAction = (ajaxFunc, successCallback) => {
  return arg => dispatch => {
    return ajaxFunc(arg).then(response => {
      return dispatch(successCallback(response));
    }, err => {
      return dispatch(receiveErrors(err));
    });
  };
};
