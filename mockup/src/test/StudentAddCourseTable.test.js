import React from 'react'
import { shallow} from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import StudentAddCourseTable from '../Views/StudentAddCourseTable'

describe('Test enroll course', () => {
    window.confirm = jest.fn(() => true)

  // it('should start from 19', () => {
  //     const wrapper = shallow(<StudentEnrolledTable />)
  //     expect(wrapper.state('allcredit')).toBe(19)
  //   })
  it('credits decrease', () => {
    const wrapper = shallow(<StudentAddCourseTable />)
    this.setState（{allcredit:19}）
    wrapper.instance().handleAdd()
    expect(wrapper.state('allcredit')).toBe(22)
    wrapper.instance().handleAdd()
    expect(wrapper.state('allcredit')).toBe(25)
    wrapper.instance().handleAdd()
    expect(wrapper.state('allcredit')).toBe(25)



    // wrapper.instance().handleWithdraw2()
    // expect(wrapper.state('allcredit')).toBe(13)
    // wrapper.instance().handleWithdraw3()
    // expect(wrapper.state('allcredit')).toBe(10)
    // wrapper.instance().handleWithdraw4()
    // expect(wrapper.state('allcredit')).toBe(7)
    // wrapper.instance().handleWithdraw5()
    // expect(wrapper.state('allcredit')).toBe(4)
    // wrapper.instance().handleWithdraw6()
    // expect(wrapper.state('allcredit')).toBe(1)
    // wrapper.instance().handleWithdraw7()
    // expect(wrapper.state('allcredit')).toBe(0)
    })
})
