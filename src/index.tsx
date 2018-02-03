import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Base from './Base';
// import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//Redux archtecture
import { createStore, applyMiddleware, compose } from 'redux';
import wholeState from './reducers/index';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

//Definitions
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const store = createStore(
  wholeState,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
      <Base />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
// registerServiceWorker();
