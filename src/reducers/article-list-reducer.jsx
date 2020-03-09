
export default (state = {}, action) => {
  let newState;
  const { title, author, content, date, id } = action;

  switch (action.type) {
    case 'ADD_ARTICLE':
      newState = Object.assign({}, state, {
        [id]: {
          title: title,
          author: author,
          content: content,
          date: date,
          id: id
        }
      });
      return newState;

    default:
      return state;
    }
};
