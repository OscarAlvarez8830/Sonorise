import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  return (
    <main className="LandingPage">
      <section className="LandingPage__section">
        <h1 className="LandingPage__h1">Sonorise</h1>
        <nav className="LandingPage__nav">
          <Link
            className="LandingPage__link LandingPage__link--green-and-white"
            to="/sign-up">
            SIGN UP
          </Link>

          <aside className="LandingPage__aside">
            <span className="LandingPage__span">--</span>
              ALREADY HAVE AN ACCOUNT?
            <span className="LandingPage__span">--</span>
          </aside>

          <Link
            className="LandingPage__link LandingPage__link--white-and-black" to="/login">
            LOGIN
          </Link>
        </nav>
      </section>
      <figure className="LandingPage__figure">
        Beautiful music for a beautiful life.
      </figure>
    </main>
  );
};
