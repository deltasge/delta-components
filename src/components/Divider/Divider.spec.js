/* global describe it expect  */

import React from 'react'
import Divider from './Divider'

import AirplaneIcon from 'mdi-material-ui/Airplane'

import { mount } from 'enzyme'

describe('<Divider />', () => {
  it('matches recieved icon', async () => {
    const wrapper = mount(<Divider icon={AirplaneIcon} />)

    const props = wrapper.props()
    expect(typeof props.icon).toBe('function')
  })
})
