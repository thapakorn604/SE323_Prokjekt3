import React from 'react'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import StudentPayment from '../Views/StudentPayment'
import StudentPayTable from '../Views/StudentPayTable'
import StudentNav from '../Views/StudentNav'

describe('Test find payment component',()=>{

  it('Text name renders correctly',()=>{
    const wrapper = shallow(<StudentPayment/>)
    expect(wrapper.find(StudentNav)).toHaveLength(1);
    expect(wrapper.find(StudentPayTable)).toHaveLength(1);
  })

})
