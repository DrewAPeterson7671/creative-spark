import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ArticleDetail from './ArticleDetail';
import ArticleList from './ArticleList';


function Article(props) {
  let optionSelectArticle = null;
  if (props.selectedArticle.length > 0) {
    optionSelectArticle = <ArticleDetail selectedArticle={props.articleList[props.selectedArticle]} />;
  }
  console.log(props);
  return (
    <div>
      {optionSelectArticle}
      <ArticleList
        articleList={props.articleList}
        currentRouterPath={props.location.pathname}/>
    </div>
  );


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
  articleId: PropTypes.string.isRequired,
  articleList: PropTypes.object,
  // currentRouterPath: PropTypes.string.isRequired,
  selectedArticle: PropTypes.object
};

const mapStateToProps = state => {
  return {
    selectedArticle: state.selectedArticle,
    articleList: state.masterArticleList
  };
};

export default connect(mapStateToProps)(Article);
