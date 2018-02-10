import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
  const navLink = (
    <section className="SessionForm__section">
      <span className="SessionForm__span">Don't have an account?</span>
      <Link to="sign-up" className="SessionForm__link">Sign up</Link>
    </section>
  );
  return (
    <SessionForm
      errors={ errors }
      initialState={ initialState }
      navLink={ navLink }
      submit={ submit }
      submitText="Log in" />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
