import React from 'react';
import ReactDOM from 'react-dom';
import Kairouan from './Kairouan';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Kairouan />, div);
  ReactDOM.unmountComponentAtNode(div);
});
