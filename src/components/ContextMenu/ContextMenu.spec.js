/* global describe it expect */

import React from 'react'
import { mount } from 'enzyme'
import sinon from 'sinon'

import ContextMenu from './ContextMenu'

import DeleteIcon from 'mdi-material-ui/Delete'

describe('<ContextMenu />', () => {
  it('should render', () => {
    const data = { id: 1 }
    const handleClickStub = sinon.spy()

    const itens = [
      {
        name: 'Delete',
        icon: <DeleteIcon />,
        handleClick: handleClickStub
      }
    ]

    const wrapper = mount(<ContextMenu itens={itens} data={data} />)

    expect(wrapper.props().itens).toEqual(itens)
    expect(wrapper.props().data).toEqual(data)
  })
})
