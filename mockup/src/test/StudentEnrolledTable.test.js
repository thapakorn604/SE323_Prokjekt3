import React from 'react'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import StudentEnrolledTable from '../Views/StudentEnrolledTable'

describe('Test withdraw', () => {
    // const stubs = [
    //     {account : 'student',password :'student',type : 'Student'},
    //     {account : 'lecturer',password :'lecturer',type : 'Lecturer'},
    //     {account : 'lecturer',password :'student',type : 'Student'},
    //     {account : 'lecturer',password :'student',type : 'Lecturer'},
    //     {account : 'lecturer',password :'lecturer',type : 'Student'}
    // ]
    window.confirm = jest.fn(() => true)

  it('should start from 19', () => {
      const wrapper = shallow(<StudentEnrolledTable />)
      expect(wrapper.state('allcredit')).toBe(19)
    })
  it('first withdraw, credits decrease', () => {
    const wrapper = shallow(<StudentEnrolledTable />)
    wrapper.instance().handleWithdraw1()
    expect(wrapper.state('allcredit')).toBe(16)
    })
  // it('should renders correctly', () => {
  //     const wrapper = shallow(<StudentEnrolledTable />)
  //     wrapper.instance().handleWithdraw2()
  //     expect(wrapper.state('allcredit')).toBe(13)
  //   })
  // it('should renders correctly', () => {
  //     const wrapper = shallow(<StudentEnrolledTable />)
  //     wrapper.instance().handleWithdraw3()
  //     expect(wrapper.state('allcredit')).toBe(10)
  //   })
  // it('should renders correctly', () => {
  //     const wrapper = shallow(<StudentEnrolledTable />)
  //     wrapper.instance().handleWithdraw4()
  //     expect(wrapper.state('allcredit')).toBe(7)
  //   })
  //
  // it('should renders correctly', () => {
  //     const wrapper = shallow(<StudentEnrolledTable />)
  //     wrapper.instance().handleWithdraw5()
  //     expect(wrapper.state('allcredit')).toBe(4)
  //   })
  // it('should renders correctly', () => {
  //     const wrapper = shallow(<StudentEnrolledTable />)
  //     wrapper.instance().handleWithdraw6()
  //     expect(wrapper.state('allcredit')).toBe(1)
  //   })
  //
  // it('should renders correctly', () => {
  //     const wrapper = shallow(<StudentEnrolledTable />)
  //     wrapper.instance().handleWithdraw7()
  //     expect(wrapper.state('allcredit')).toBe(0)
  //   })



})
