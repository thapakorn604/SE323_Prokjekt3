import React from 'react'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import AdminLogin from '../Views/AdminLogin'

describe('Test Admin login', () => {
  const stubs = [
        {account:'admin',password:'admin'},
        {account:'',password:'admin' },
        {account:'admin',password:'' }
    ]
it('should renders correctly', () => {
  const wrapper = shallow(<AdminLogin />)
  expect(wrapper.state('account')).toBe('')
  expect(wrapper.state('password')).toBe('')
})

it('should login correctly', () => {
  const wrapper = shallow(<AdminLogin />)
  wrapper.setState(stubs[0])
  wrapper.instance().handleSignIn() 
  expect(wrapper.state('account')).toBe('admin')
  expect(wrapper.state('password')).toBe('admin')
  expect(wrapper.instance().handleSignIn()).ToBeCalled
})

it('should not login by wrong account', () => {
  const wrapper = shallow(<AdminLogin />)
  wrapper.setState(stubs[1])
  wrapper.instance().handleSignIn() 
  expect(wrapper.state('account')).toBe('')
  expect(wrapper.state('password')).toBe('admin')
  expect(wrapper.instance().handleSignIn()).ToBeCalled
})

it('should not login by wrong account', () => {
  const wrapper = shallow(<AdminLogin />)
  wrapper.setState(stubs[2])
  wrapper.instance().handleSignIn()
  expect(wrapper.state('account')).toBe('admin')
  expect(wrapper.state('password')).toBe('')
  expect(wrapper.instance().handleSignIn()).ToBeCalled
})

})
