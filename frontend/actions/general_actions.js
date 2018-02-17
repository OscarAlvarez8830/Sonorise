export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

export const thunkAction = (ajaxFunc, successCallback) => {
  return (...args) => dispatch => {
    return ajaxFunc(...args).then(response => {
      dispatch(clearErrors());
      return dispatch(successCallback(response));
    }, err => {
      return dispatch(receiveErrors(err));
    });
  };
};
