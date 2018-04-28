import React from 'react'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import LecturerGrading from '../Views/LecturerGrading'
describe('LecturerGrading',()=>{
  const stubs = [
    {grade1 : 'A', grade2 : 'B', grade3 : 'C', grade4 : 'D', grade5 : 'F'},
    {grade1 : '', grade2 : '', grade3 : '', grade4 : '', grade5 : ''}
  ]
  it('Lecturer Add grade Successfully',()=>{
    const wrapper = shallow(<LecturerGrading/>)
    wrapper.setState(stubs[0])
    //wrapper.instance()
    expect(wrapper.state('grade1')).toBe('A')
    expect(wrapper.state('grade2')).toBe('B')
    expect(wrapper.state('grade3')).toBe('C')
    expect(wrapper.state('grade4')).toBe('D')
    expect(wrapper.state('grade5')).toBe('F')
    //expect(wrapper.instance()).toBeCalled
  })
  it('Lecturer Add grade Successfully',()=>{
    const wrapper = shallow(<LecturerGrading/>)
    wrapper.setState(stubs[1])
    //wrapper.instance()
    expect(wrapper.state('grade1')).toBe('')
    expect(wrapper.state('grade2')).toBe('')
    expect(wrapper.state('grade3')).toBe('')
    expect(wrapper.state('grade4')).toBe('')
    expect(wrapper.state('grade5')).toBe('')
    //expect(wrapper.instance()).toBeCalled
  })
})
