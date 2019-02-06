/* global describe it expect */

import React from 'react'
import UserAvatar from './UserAvatar'

import { render, mount } from 'enzyme'
describe('<UserAvatar />', () => {
  it('should render', () => {
    const wrapper = render(<UserAvatar name='Teste' subtitle='Subteste' />)
    expect(wrapper.text()).toBe('TTesteSubteste')
  })

  it('should mount image', () => {
    const wrapper = mount(<UserAvatar name='Imagem' subtitle='Subtitulo' image='https://i.imgur.com/vGE4aVi.png' />)
    expect(wrapper.exists('img[src="https://i.imgur.com/vGE4aVi.png"]')).toEqual(true)
  })

  it('should mount snapshopts', () => {
    const wrapper = mount(<UserAvatar name='Imagem' subtitle='Subtitulo' image='https://i.imgur.com/vGE4aVi.png' />)
    expect(wrapper).toMatchSnapshot()
  })
})
