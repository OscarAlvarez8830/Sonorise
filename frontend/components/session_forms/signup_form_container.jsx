import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import { clearErrors } from '../../actions/general_actions';
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
    clearErrors: () => dispatch(clearErrors()),
  };
};

const SignupForm = props => {
  const { clearErrors, errors, submit } = props;
  const initialState = { email: '', username: '', password: '' };
  const navLink = (
    <section className="SessionForm__section">
      <span className="SessionForm__span">Already an account?</span>
      <Link
        to="login"
        onClick={ clearErrors }
        className="SessionForm__link">
        Log in
      </Link>
    </section>
  );
  return (
    <SessionForm
      errors={ errors }
      initialState={ initialState }
      navLink={ navLink }
      submit={ submit }
      submitText="Sign up" />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
