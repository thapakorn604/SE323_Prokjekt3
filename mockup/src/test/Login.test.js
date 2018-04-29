import React from 'react'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import Login from '../Views/Login'

describe('Test Users login', () => {
    const stubs = [
        {account : 'student',password :'student',type : 'Student'},
        {account : 'lecturer',password :'lecturer',type : 'Lecturer'},
        {account : 'lecturer',password :'student',type : 'Student'},
        {account : 'lecturer',password :'student',type : 'Lecturer'},
        {account : 'lecturer',password :'lecturer',type : 'Student'}
    ]

  it('should renders correctly', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.state('type')).toBe('Student')
    expect(wrapper.state('account')).toBe('')
    expect(wrapper.state('password')).toBe('')
    })
 
 it('should login correctly by Student', () => {
   const wrapper = shallow(<Login />)
    wrapper.setState(stubs[0])
    wrapper.instance().handleSignIn()
    expect(wrapper.state('account')).toBe('student')
    expect(wrapper.state('password')).toBe('student')
    expect(wrapper.state('type')).toBe('Student')
    expect(wrapper.instance().handleSignIn()).toBeCalled
    const newUrl='student/index'
    Object.defineProperty(window.location,'herf',{
      writable:true,
      value:newUrl
    });
 })

 it('should login correctly by Lecturer', () => {
   const wrapper = shallow(<Login />)
    wrapper.setState(stubs[1])
    wrapper.instance().handleSignIn()
    expect(wrapper.state('account')).toBe('lecturer')
    expect(wrapper.state('password')).toBe('lecturer')
    expect(wrapper.state('type')).toBe('Lecturer')
    expect(wrapper.instance().handleSignIn()).toBeCalled
    const newUrl='lecturer/index'
    Object.defineProperty(window.location,'herf',{
      writable:true,
      value:newUrl
    });
 })

 it('should not login by wrong account', () => {
   const wrapper = shallow(<Login />)
    wrapper.setState(stubs[2])
    wrapper.instance().handleSignIn()
    expect(wrapper.state('account')).toBe('lecturer')
    expect(wrapper.state('password')).toBe('student')
    expect(wrapper.state('type')).toBe('Student')
    expect(wrapper.instance().handleSignIn()).toBeCalled
    const newUrl=''
    Object.defineProperty(window.location,'herf',{
      writable:true,
      value:newUrl
    });
 })

 it('should not login by wrong password', () => {
   const wrapper = shallow(<Login />)
    wrapper.setState(stubs[3])
    wrapper.instance().handleSignIn()
    expect(wrapper.state('account')).toBe('lecturer')
    expect(wrapper.state('password')).toBe('student')
    expect(wrapper.state('type')).toBe('Lecturer')
    expect(wrapper.instance().handleSignIn()).toBeCalled
    const newUrl=''
    Object.defineProperty(window.location,'herf',{
      writable:true,
      value:newUrl
    });
 })

 it('should not login by wrong type', () => {
   const wrapper = shallow(<Login />)
    wrapper.setState(stubs[4])
    wrapper.instance().handleSignIn()
    expect(wrapper.state('account')).toBe('lecturer')
    expect(wrapper.state('password')).toBe('lecturer')
    expect(wrapper.state('type')).toBe('Student')
    expect(wrapper.instance().handleSignIn()).toBeCalled
    const newUrl=''
    Object.defineProperty(window.location,'herf',{
      writable:true,
      value:newUrl
    });
 })
    
})