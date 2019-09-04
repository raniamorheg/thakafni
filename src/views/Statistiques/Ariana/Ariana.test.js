import React from 'react';
import ReactDOM from 'react-dom';
import Ariana from './Ariana';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Ariana />, div);
  ReactDOM.unmountComponentAtNode(div);
});
