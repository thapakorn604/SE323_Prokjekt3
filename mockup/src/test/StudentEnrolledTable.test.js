import React from 'react'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import StudentEnrolledTable from '../Views/StudentEnrolledTable'
describe('Student WithDraw Course',()=>{
  const stubs = [
    {allcredit : '18'},
    {allcredit : '19'}
  ]
  it('WithDraw Successfully',()=>{
    const wrapper = shallow(<StudentEnrolledTable/>)
    wrapper.setState(stubs[0])
    expect(wrapper.state('allcredit')).toBe('18')
  })
  it('WithDraw not Successfully',()=>{
    const wrapper = shallow(<StudentEnrolledTable/>)
    wrapper.setState(stubs[1])
    expect(wrapper.state('allcredit')).toBe('19')
  })
})
