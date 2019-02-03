/* global describe it expect */

import React from 'react'
import SnackbarContent from './SnackbarContent'
import { mount } from 'enzyme'
import sinon from 'sinon'

describe('<SnackbarContent />', () => {
  it('should mount and simulate click', () => {
    const onClick = sinon.spy()
    const wrapper = mount(<SnackbarContent variant='success' message='message' onClose={onClick} />)
    // console.log(wrapper.html())
    wrapper.find('button').simulate('click')
    expect(onClick).toHaveProperty('callCount', 1)
    expect(wrapper.text()).toEqual('message')
  })
  it('matches the snapshot', () => {
    const tree = mount(<SnackbarContent variant='error' message='message' />)
    expect(tree).toMatchSnapshot()
  })
  it('should mount error', () => {
    const wrapper = mount(<SnackbarContent variant='error' message='Message Error' />)
    // console.log(wrapper.html())
    expect(wrapper.text()).toEqual('Message Error')
  })
})
