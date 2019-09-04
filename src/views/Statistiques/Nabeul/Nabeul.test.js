import React from 'react';
import ReactDOM from 'react-dom';
import Nabeul from './Nabeul';

it('renders without crashing', () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(<Nabeul />, div);
  ReactDOM.unmountComponentAtNode(div);
});
