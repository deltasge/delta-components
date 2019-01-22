/* global describe it expect */

import React from 'react'
import ProgressButton from './index'
import { mount } from 'enzyme'

describe('<ProgressButton />', () => {
  it('should mount', () => {
    const wrapper = mount(<ProgressButton type='button' label='Label' />)
    expect(wrapper.containsMatchingElement(<span>Label</span>)).toEqual(true)
  })
  it('matches the snapshot', () => {
    const tree = mount(<ProgressButton type='button' label='Label' />)
    expect(tree).toMatchSnapshot()
  })
  it('should mount disabled button', () => {
    const wrapper = mount(<ProgressButton type='button' label='Label' disabled />)
    expect(wrapper.containsMatchingElement(<button type='button' disabled><span>Label</span></button>)).toEqual(true)
  })
  it('should mount loading button', () => {
    const wrapper = mount(<ProgressButton type='button' label='Label' loading />)
    expect(wrapper.find('circle').length).toEqual(1)
  })
})
