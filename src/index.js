import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/reducer';
import { HashRouter } from 'react-router-dom';

const store = createStore(reducer);

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
