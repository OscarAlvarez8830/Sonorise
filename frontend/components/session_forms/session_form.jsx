import React, { Component } from 'react';

export default class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, props.initialState);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  errorStyling(field) {
    return this.props.errors[field] ? ' SessionForm__input--error' : '';
  }

  guestLogin() {
    const guest = { email: 'guest@gmail.com', password: 'password' };
    const clickHandler = e => {
      e.stopPropagation();
      this.props.login({ email: 'guest@gmail.com', password: 'password' });
    }
    return (
      <button className="SessionForm__button" onClick={clickHandler}>
        Log in as Guest
      </button>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(Object.assign({}, this.state));
  }

  renderErrors(field) {
    if (this.props.errors[field]) {
      return (
        <aside className="SessionForm__aside">
          {`${this.props.errors[field]}`}
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
            className={`SessionForm__input${this.errorStyling('username')}`}
            onChange={this.update('username')}
            placeholder="What should we call you?"
            value={this.state.username} />

            {this.renderErrors('username')}
        </fieldset>
      );
    }
  }

  render() {
    return (
      <main className="SessionForm">
        <header className="SessionForm__header">Sonorise</header>
        <form className="SessionForm__form" onSubmit={this.handleSubmit}>
          {this.renderErrors('base')}
          <fieldset className="SessionForm__fieldset">
            <input
              type="text"
              className={`SessionForm__input${this.errorStyling('email')}`}
              onChange={this.update('email')}
              placeholder="Email"
              value={this.state.email} />

            {this.renderErrors('email')}
          </fieldset>

          {this.usernameField()}

          <fieldset className="SessionForm__fieldset">
            <input
              type="password"
              className={`SessionForm__input${this.errorStyling('password')}`}
              onChange={this.update('password')}
              placeholder="Password"
              value={this.state.password} />

            {this.renderErrors('password')}
          </fieldset>

          <button className="SessionForm__button">
            {this.props.submitText}
          </button>
        </form>
        {this.guestLogin()}
        {this.props.navLink}
      </main>
    );
  }
}
