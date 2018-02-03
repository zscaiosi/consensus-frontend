import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Base from './Base';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Base />
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
