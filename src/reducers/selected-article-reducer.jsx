export default (state = {}, action) => {
  switch (action.type) {
  case 'SELECT_ARTICLE':
    return action.articleId;
  default:
    return state;
  }
};
