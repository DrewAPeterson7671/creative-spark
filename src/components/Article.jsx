import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Article(props) {

  const articleInformation =
    <div>
      <h3>{props.title}</h3>
      <h4>{props.author}</h4>
      <h4>{props.date}</h4>
      <p>{props.content}</p>
      <hr/>
    </div>
  return (
    <div>
      {articleInformation}
    </div>
  );
}


Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string,
  content: PropTypes.string.isRequired,
  ticketId: PropTypes.string.isRequired
}

export default connect()(Article);
