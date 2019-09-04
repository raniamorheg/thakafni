import React from 'react';
import ReactDOM from 'react-dom';
import Béja from './Béja';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Béja />, div);
  ReactDOM.unmountComponentAtNode(div);
});
