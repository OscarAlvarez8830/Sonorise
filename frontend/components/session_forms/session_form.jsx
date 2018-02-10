import React, { Component } from 'react';

export default class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = props.initialState;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderErrors(field) {
    if (this.props.errors[field]) {
      return (
        <aside className="SessionForm__aside">
          { `${field} ${this.props.errors[field]}` }
        </aside>
      );
    }
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  usernameField() {
    if (this.props.initialState.username !== undefined) {
      return (
        <fieldset className="SessionForm__fieldset">
          <input
            type="text"
            onChange={ this.update('username') }
            placeholder="What should we call you?"
            value={ this.state.username } />

            { this.renderErrors('username') }
        </fieldset>
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(Object.assign({}, this.state));
  }

  render() {
    return (
      <form className="SessionForm" onSubmit={ this.handleSubmit }>

        <fieldset className="SessionForm__fieldset">
          <input
            type="text"
            className="SessionForm__input"
            onChange={ this.update('email') }
            placeholder="Email"
            value={ this.state.email } />

          { this.renderErrors('email') }
        </fieldset>

        { this.usernameField() }

        <fieldset className="SessionForm__fieldset">
          <input
            type="password"
            className="SessionForm__input"
            onChange={ this.update('password') }
            placeholder="Password"
            value={ this.state.password } />

          { this.renderErrors('password') }
        </fieldset>

        <button className="SessionForm__button">
          { this.props.submitText }
        </button>
      </form>
    );
  }
}
