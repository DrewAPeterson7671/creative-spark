import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/reducer'
import { HashRouter } from 'react-router-dom';

const store = createStore(reducer);

const render = (Component) => {
ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <Component/>
    </Provider>
  </HashRouter>,
  document.getElementById('react-app-root')
);
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
