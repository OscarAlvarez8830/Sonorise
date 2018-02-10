import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { getErrors } from '../../reducers/ui/errors_reducer';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    errors: getErrors(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submit: user => dispatch(login(user)),
  };
};

const LoginForm = props => {
  const { errors, submit } = props;
  const initialState = { email: '', password: '' };
  return (
    <SessionForm
      errors={ errors }
      initialState={ initialState }
      submit={ submit }
      submitText="Login" />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
