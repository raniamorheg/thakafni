import React from 'react';
import ReactDOM from 'react-dom';
import Medenine from './Medenine';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Medenine />, div);
  ReactDOM.unmountComponentAtNode(div);
});
