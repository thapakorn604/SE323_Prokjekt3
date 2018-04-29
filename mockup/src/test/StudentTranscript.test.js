import React from 'react'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })
import StudentNav from '../Views/StudentNav'
import StudentGradeSum from '../Views/StudentGradeSum'
import StudentGradeResult from '../Views/StudentGradeResult'
import StudentTranscript from '../Views/StudentTranscript'
import { Box,Button } from 'reactbulma'

describe('Student Transcript',()=>{

  it('Add StudentTranscript render correctly',()=>{
    const wrapper = shallow(<StudentTranscript/>)
    expect(wrapper.find(StudentNav)).toHaveLength(1)
    expect(wrapper.find(StudentGradeSum)).toHaveLength(2)
    expect(wrapper.find(StudentGradeResult)).toHaveLength(1)
  })
})
