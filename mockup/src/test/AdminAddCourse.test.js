import React from 'react'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import AdminAddCourse from '../Views/AdminAddCourse'
describe('Test Add Course',()=>{
  const stubs=[
    {id : '953234', name : 'Computer Programming', lecturers : 'Dr.Prompong Sugunasil', seats : '30',
    credits : '3', days : 'Monday', timefrom : '9:30', timeto : '10:00', semester : '1/2560'},
    {id : '', name : 'Computer Programming', lecturers : 'Dr.Prompong Sugunasil', seats : '30',
    credits : '3', days : 'Monday', timefrom : '9:30', timeto : '10:00', semester : '1/2560'},
    
  ]
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
  it('Add Course Successfully',()=>{
    const wrapper = shallow(<AdminAddCourse/>)
    wrapper.setState(stubs[0])
    wrapper.instance().handleSubmit()
    expect(wrapper.state('id')).toBe('953234')
    expect(wrapper.state('name')).toBe('Computer Programming')
    expect(wrapper.state('lecturers')).toBe('Dr.Prompong Sugunasil')
    expect(wrapper.state('seats')).toBe('30')
    expect(wrapper.state('credits')).toBe('3')
    expect(wrapper.state('days')).toBe('Monday')
    expect(wrapper.state('timefrom')).toBe('9:30')
    expect(wrapper.state('timeto')).toBe('10:00')
    expect(wrapper.state('semester')).toBe('1/2560')
    expect(wrapper.instance().handleSubmit()).toBeCalled
  })
  it('Add Course not Successfully',()=>{
    const wrapper = shallow(<AdminAddCourse/>)
    wrapper.setState(stubs[1])
    wrapper.instance().handleSubmit()
    expect(wrapper.state('id')).toBe('')
    expect(wrapper.state('name')).toBe('Computer Programming')
    expect(wrapper.state('lecturers')).toBe('Dr.Prompong Sugunasil')
    expect(wrapper.state('seats')).toBe('30')
    expect(wrapper.state('credits')).toBe('3')
    expect(wrapper.state('days')).toBe('Monday')
    expect(wrapper.state('timefrom')).toBe('9:30')
    expect(wrapper.state('timeto')).toBe('10:00')
    expect(wrapper.state('semester')).toBe('1/2560')
    expect(wrapper.instance().handleSubmit()).toBeCalled
  })

})
