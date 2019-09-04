import React from 'react';
import ReactDOM from 'react-dom';
import Mahdia from './Mahdia';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Mahdia />, div);
  ReactDOM.unmountComponentAtNode(div);
});
