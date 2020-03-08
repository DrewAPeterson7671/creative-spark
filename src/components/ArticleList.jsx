import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

function ArticleList(props){
  return (
    <div>

      {Object.keys(props.articleList).map(function(articleId) {
        var article = props.articleList[articleId];
        return <Article title={article.title}
        author={article.author}
        content={article.content}
        date={article.date}
        key={articleId}
        articleId={articleId}/>;
      })}
    </div>
  );
}

ArticleList.propTypes = {
  articleList: PropTypes.object,
  currentRouterPath: PropTypes.string,
};

export default ArticleList;
