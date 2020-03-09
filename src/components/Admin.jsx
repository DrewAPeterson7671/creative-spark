import React from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import ArticleDetail from './ArticleDetail';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


//optionSelectArticle is to grab and article and edit comments of users

function Admin(props){
  let optionSelectArticle = null;
  if (props.selectedArticle.length > 0) {
    optionSelectArticle = <ArticleDetail selectedArticle={props.articleList}/>;
  }
  return (
    <div>
    <h2>Admin Page</h2>
    <hr/>
    <Link to='/newarticle'>Pen new article</Link>
      {optionSelectArticle}
      <ArticleList
        articleList={props.articleList}
        currentRouterPath={props.currentRouterPath}/>
    </div>
  )
}

Admin.propTypes = {
  articleList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  selectedArticle: PropTypes.object
};

const mapStateToProps = state => {
  return {
    selectedArticle: state.selectedArticle,
    articleList: state.masterArticleList
  };
};

export default connect(mapStateToProps)(Admin);
