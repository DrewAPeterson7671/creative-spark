import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Home() {
  return (
    <div>
      <h3>Home Page</h3>
      <p>Now what?</p>
    </div>
  );
}

export default connect()(Home);
