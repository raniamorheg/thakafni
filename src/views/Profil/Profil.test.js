import React from 'react';
import ReactDOM from 'react-dom';
import Profil from './Profil';
import { Profil } from '..';

jest.mock('react-chartjs-2', () => ({
  Line: () => null,
  Polar: () => null,
  Pie: () => null,
  Radar: () => null,
  Bar: () => null,
  Doughnut: () => null,
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Profil />, div);
  ReactDOM.unmountComponentAtNode(div);
});