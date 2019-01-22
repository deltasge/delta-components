/* global describe it expect */

import React from 'react'
import SocialMediaButtons from './SocialMediaButtons'
import { mount } from 'enzyme'

import Facebook from 'mdi-material-ui/Facebook'
import Google from 'mdi-material-ui/Google'

describe('<SocialMediaButtons />', () => {
  it('should mount', () => {
    const itens = [
      { link: `/auth/facebook/`, icon: Facebook, background: 'facebook', color: 'white' },
      { link: `/auth/google/`, icon: Google, background: 'google', color: 'white' }
    ]
    const wrapper = mount(<SocialMediaButtons itens={itens} />)
    expect(wrapper.find(`a[href="${itens[0].link}"]`).exists()).toEqual(true)
    expect(wrapper.find(`a[href="${itens[1].link}"]`).exists()).toEqual(true)
  })
})
