import React from 'react'
import PropTypes from 'prop-types'

import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'

const DesktopDisplay = ({ itens, data }) => (
  <React.Fragment>
    {itens.map((m, i) => (
      <Tooltip key={`${data.id}-${i}`} title={m.name}>
        <IconButton aria-label={m.ariaLabel || m.name}
          onClick={() => {
            m.handleClick(data)
          }}
        >
          {m.icon}
        </IconButton>
      </Tooltip>
    ))}
  </React.Fragment>
)

DesktopDisplay.protoTypes = {
  itens: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.node]),
    handleClick: PropTypes.func.isRequired,
    ariaLabel: PropTypes.string
  })).isRequired,
  data: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }).isRequired
}

export default DesktopDisplay
