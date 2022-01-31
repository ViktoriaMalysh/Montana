import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from "./route";
import { rootReducers } from "./redux/combineReducers";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

const store = createStore(rootReducers, compose(
  applyMiddleware(thunk), 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

render(
  <div className='one'>
    <Provider store = {store}>
      <App/>
    </Provider>
  </div>,
  document.getElementById('root')
);

  