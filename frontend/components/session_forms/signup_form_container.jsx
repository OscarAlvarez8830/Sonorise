import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { getErrors } from '../../reducers/ui/errors_reducer';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    errors: getErrors(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submit: user => dispatch(signup(user)),
  };
};

const SignupForm = props => {
  const { errors, submit } = props;
  const initialState = { email: '', username: '', password: '' };
  return (
    <SessionForm
      errors={ errors }
      initialState={ initialState }
      submit={ submit }
      submitText="Sign Up" />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
