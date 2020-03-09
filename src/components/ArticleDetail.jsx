import React from 'react';
import PropTypes from 'prop-types';

function ArticleDetail(props){
  return (
    <div>
      <hr/>
      <h1>{props.selectedArticle.title}</h1>
      <h2>{props.selectedArticle.author}</h2>
      <h3>{props.selectedArticle.date}</h3>
      <p>{props.selectedArticle.content}</p>
      <hr/>
    </div>
  );
}

ArticleDetail.propTypes = {
  selectedArticle: PropTypes.object
};

export default ArticleDetail;
