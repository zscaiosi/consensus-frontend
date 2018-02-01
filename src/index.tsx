import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Base from './Base';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Base />
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
