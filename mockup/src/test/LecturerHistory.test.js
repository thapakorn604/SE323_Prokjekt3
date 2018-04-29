import React from 'react'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import LecturerHistory from '../Views/LecturerHistory'
import LecturerHistoryTable from '../Views/LecturerHistoryTable'
import LecturerNav from '../Views/LecturerNav'

describe('Lecturer history test', () => {
  it('should renders correctly', () => {
    const wrapper = shallow(<LecturerHistory/>)
    expect(wrapper.find(LecturerHistoryTable)).toHaveLength(1)
    expect(wrapper.find(LecturerNav)).toHaveLength(1)
    
  })
})
