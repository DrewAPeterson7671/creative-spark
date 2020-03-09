import selectedArticleReducer from './selected-article-reducer';
import articleListReducer from './article-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  selectedArticle: selectedArticleReducer,
  masterArticleList: articleListReducer
});

export default rootReducer;
