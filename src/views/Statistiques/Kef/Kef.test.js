import React from 'react';
import ReactDOM from 'react-dom';
import Kef from './Kef';

it('renders without crashing', () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(<Kef />, div);
  ReactDOM.unmountComponentAtNode(div);
});
