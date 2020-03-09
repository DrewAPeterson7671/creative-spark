export default (state = {}, action) => {
  switch (action.type) {
  case 'CURRENT_ROUTER_PATH':
    return action.currentRouterPath;
  default:
    return state;
  }
};
