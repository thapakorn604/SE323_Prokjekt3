import React from 'react'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import Login from '../Views/Login'

it('renders correctly', () => {
  const wrapper = shallow(<Login />)

  expect(wrapper.state('type')).toBe('Student')
})