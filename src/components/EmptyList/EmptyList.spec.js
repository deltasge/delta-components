/* global describe it expect */

import React from 'react'
import EmptyList from './index'

import { render, mount } from 'enzyme'
describe('<EmptyList />', () => {
  it('should render title', () => {
    const wrapper = render(<EmptyList title='Titulo' />)
    expect(wrapper.text()).toBe('Titulo')
  })
  it('should render title and subtitle', () => {
    const wrapper = render(<EmptyList title='Titulo' subtitle='Sub Titulo' />)
    expect(wrapper.text()).toBe('TituloSub Titulo')
  })
  it('matches the snapshot', () => {
    const tree = mount(<EmptyList title='Titulo' subtitle='Sub Titulo' />)
    expect(tree).toMatchSnapshot()
  })
})
