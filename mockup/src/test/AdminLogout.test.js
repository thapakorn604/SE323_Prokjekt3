import React from 'react'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import AdminNav from '../Views/AdminNav'

describe('Test Admin Logout',() => {

  it('Logout Successfully',()=> {
    const wrapper = shallow(<AdminNav/>)
    wrapper.instance().handleLogout()
    expect(wrapper.instance().handleLogout()).toBeCalled
    window.confirm = jest.fn(() => true)
  })

  it('Logout not Successfully',() => {
    const wrapper = shallow(<AdminNav/>)
    wrapper.instance().handleLogout()
    expect(wrapper.instance().handleLogout()).toBeCalled
    window.cancel = jest.fn(() => false)
  })
})
