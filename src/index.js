import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { HashRouter } from 'react-router-dom';
import logger from 'redux-logger';
import rootReducer from './reducers/index';

const store = createStore(rootReducer, applyMiddleware(logger));

const render = (Component) => {
ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <Component/>
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);
};

render(App);
