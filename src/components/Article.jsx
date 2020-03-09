import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Article(props) {

  function handleSelectedArticle(articleId){
    const { dispatch } = props;
    const action = {
      type: 'SELECT_ARTICLE',
      articleId: articleId
    };
    dispatch(action);
  }

  const articleInformation =
    <div onClick={() => {handleSelectedArticle(props.articleId);}}>
      <h2>{props.title}</h2>
      <h3>{props.author} {props.date}</h3>
      <p>{props.content}</p>
    </div>;

  if (props.currentRouterPath === '/admin'){
    return (
      <div>
        <h3>NEED TO ADD Edit Article - Delete Review</h3>
        {articleInformation}
        </div>
    );
  } else {
    return (
      <div>
        {articleInformation}
      </div>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string,
  content: PropTypes.string.isRequired,
  articleId: PropTypes.string.isRequired
}

export default connect()(Article);
