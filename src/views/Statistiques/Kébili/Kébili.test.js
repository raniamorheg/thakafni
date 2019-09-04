import React from 'react';
import ReactDOM from 'react-dom';
import Kébili from './Kébili';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Kébili />, div);
  ReactDOM.unmountComponentAtNode(div);
});
