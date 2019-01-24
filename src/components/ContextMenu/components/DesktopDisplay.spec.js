/* global describe it expect */

import React from 'react'
import DesktopDisplay from './DesktopDisplay'
import { mount } from 'enzyme'
import DeleteIcon from '@material-ui/icons/Delete'

describe('<DesktopDisplay />', () => {
  it('should render', () => {
    const itens = [
      {
        name: 'Item Menu',
        icon: <DeleteIcon aria-label='Delete' />,
        handleClick: () => (null)
      }
    ]
    const data = {
      id: 1
    }
    const wrapper = mount(<DesktopDisplay itens={itens} data={data} />)
    // console.log(wrapper.html())
    expect(wrapper.props().itens).toEqual(itens)
    expect(wrapper.props().data).toEqual(data)
  })
})
