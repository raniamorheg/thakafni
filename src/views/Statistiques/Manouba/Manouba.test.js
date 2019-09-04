import React from 'react';
import ReactDOM from 'react-dom';
import Manouba from './Manouba';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Manouba/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
