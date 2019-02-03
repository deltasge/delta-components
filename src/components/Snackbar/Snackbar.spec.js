/* global describe it expect */

import React from 'react'
import Snackbar from './Snackbar'
import { mount } from 'enzyme'

describe('<Snackbar />', () => {
  it('should mount', () => {
    const wrapper = mount(<Snackbar variant='success' message='Message Success' />)
    // console.log(wrapper.html())
    expect(wrapper.text()).toEqual('Message Success')
  })
  it('matches the snapshot', () => {
    const tree = mount(<Snackbar variant='success' message='Message Success' />)
    expect(tree).toMatchSnapshot()
  })
})
