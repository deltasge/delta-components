/* global describe it expect */

import React from 'react'
import SplashScreen from './SplashScreen'
import { mount } from 'enzyme'

describe('<SplashScreen />', () => {
  const error = 'Message Error'
  const logo = 'https://picsum.photos/200/300/?random'
  it('should mount', () => {
    const wrapper = mount(<SplashScreen logo={logo} error={error} />)
    expect(wrapper.containsMatchingElement(<img src={logo} alt='Logo' />)).toEqual(true)
    expect(wrapper.find(`span#client-snackbar`).text()).toEqual(error)
  })
  it('matches the snapshot', () => {
    const tree = mount(<SplashScreen logo={logo} loading />)
    expect(tree).toMatchSnapshot()
  })
  it('should mount loading state', () => {
    const wrapper = mount(<SplashScreen logo={logo} loading />)
    // console.log(wrapper.html())
    expect(wrapper.find('circle').length).toEqual(1)
  })
})
