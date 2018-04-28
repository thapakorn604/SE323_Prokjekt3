import React from 'react'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import AdminAddCourse from '../Views/AdminAddCourse'
describe('Test Add Course',()=>{
  it('Add Course renders correctly',()=>{
    const wrapper = shallow(<AdminAddCourse/>)
    expect(wrapper.state('id')).toBe('')
    expect(wrapper.state('name')).toBe('')
    expect(wrapper.state('lecturers')).toBe('')
    expect(wrapper.state('seats')).toBe('')
    expect(wrapper.state('credits')).toBe('')
    expect(wrapper.state('days')).toBe('')
    expect(wrapper.state('timefrom')).toBe('')
    expect(wrapper.state('timeto')).toBe('')
    expect(wrapper.state('semester')).toBe('1/2560')
  })
})
