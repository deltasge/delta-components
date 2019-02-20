/* global describe it expect */

import React from 'react'
import MobileDisplay from './MobileDisplay'
import { render } from 'enzyme'
import DeleteIcon from '@material-ui/icons/Delete'

describe('<MobileDisplay />', () => {
  it('should render', () => {
    const itens = [
      {
        name: 'Item Menu',
        icon: <DeleteIcon />,
        handleClick: () => (null),
        ariaLabel: 'Deletes'
      }
    ]
    const data = {
      id: 1
    }
    const wrapper = render(<MobileDisplay itens={itens} data={data} anchorEl={null} handleClose={() => (null)} selected={data} classes={{}} />)
    // console.log(expect(wrapper.find('svg[role]').length))
    expect(wrapper.find('svg[role]').length).toEqual(1)
  })
})
