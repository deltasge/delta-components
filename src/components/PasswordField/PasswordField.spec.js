/* global describe it expect */

import React from 'react'
import PasswordField from './index'
import { mount } from 'enzyme'

describe('<PasswordField />', () => {
  it('should mount', () => {
    const wrapper = mount(<PasswordField variant='outlined' label='Label' />)
    expect(wrapper.containsMatchingElement(<input type='password' />)).toEqual(true)
  })
  it('matches the snapshot', () => {
    const tree = mount(<PasswordField variant='outlined' label='Label' name='pass' />)
    expect(tree).toMatchSnapshot()
  })
  it('should mount disabled', () => {
    const wrapper = mount(<PasswordField label='Label' buttonDisabled />)
    // console.log(wrapper.html())
    expect(wrapper.find('button[disabled]').length).toEqual(1)
  })
})
