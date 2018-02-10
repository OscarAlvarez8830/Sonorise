import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  return (
    <main id="landing-page">
      <nav>
        <Link to="/sign-up">SIGN UP</Link>
        <Link to="/login">LOGIN</Link>
      </nav>
      <figure>
        Sonorise
        Beautiful music for a beautiful life.
      </figure>
    </main>
  );
};
