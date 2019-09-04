import React from 'react';
import ReactDOM from 'react-dom';
import Kasserine from './Kasserine';
import {mount} from 'enzyme/build';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Kasserine />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('toggle click without crashing', () => {
  const wrapper = mount(<Kasserine />);
  for (let i=0; i<2; i++) {
    let Nav = wrapper.find('a.dropdown-toggle').at(i);
    Nav.simulate('click');
    expect(wrapper.state().dropdownOpen[i]).toEqual(true);
  }
  wrapper.unmount()
});
