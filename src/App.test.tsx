import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Base from './Base';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Base />, div);
});
