import React from 'react'
import { shallow} from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import StudentEnrolledTable from '../Views/StudentEnrolledTable'

describe('Test withdraw, click cancel', () => {
    window.confirm = jest.fn(() => false)

  it('should start from 19', () => {
      const wrapper = shallow(<StudentEnrolledTable />)
      expect(wrapper.state('allcredit')).toBe(19)
    })
        it('first withdraw, credits wont change', () => {
          const wrapper = shallow(<StudentEnrolledTable />)
          wrapper.instance().handleWithdraw1()
          expect(wrapper.state('allcredit')).toBe(19)
          wrapper.instance().handleWithdraw2()
          expect(wrapper.state('allcredit')).toBe(19)
          wrapper.instance().handleWithdraw3()
          expect(wrapper.state('allcredit')).toBe(19)
          wrapper.instance().handleWithdraw4()
          expect(wrapper.state('allcredit')).toBe(19)
          wrapper.instance().handleWithdraw5()
          expect(wrapper.state('allcredit')).toBe(19)
          wrapper.instance().handleWithdraw6()
          expect(wrapper.state('allcredit')).toBe(19)
          wrapper.instance().handleWithdraw7()
          expect(wrapper.state('allcredit')).toBe(19)
          })

})
