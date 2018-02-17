import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from 'actions/session_actions';
import { clearErrors } from 'actions/general_actions';
import { getErrors } from 'reducers';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    errors: getErrors(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submit: user => dispatch(login(user)),
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

const LoginForm = ({ clearErrors, errors, login, submit }) => {
  const initialState = { email: '', password: '' };
  const navLink = (
    <section className="SessionForm__section">
      <span className="SessionForm__span">Don't have an account?</span>
      <Link
        to="sign-up"
        onClick={ clearErrors }
        className="SessionForm__link">
        Sign up
      </Link>
    </section>
  );
  return (
    <SessionForm
      errors={ errors }
      initialState={ initialState }
      login={ login }
      navLink={ navLink }
      submit={ submit }
      submitText="Log in" />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
