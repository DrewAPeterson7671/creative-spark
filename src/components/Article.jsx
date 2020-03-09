import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Article(props) {

  return (
    <div>
      <h3>{props.title}</h3>
      <h4>{props.author}</h4>
      <h4>{props.date}</h4>
      <h5>{props.content}</h5>
      <hr/>
    </div>
  );
}


Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string,
  content: PropTypes.string.isRequired,
  articleId: PropTypes.string.isRequired
}

export default connect()(Article);
