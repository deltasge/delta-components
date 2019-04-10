import React from 'react'
import PropTypes from 'prop-types'

import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import MoreVertIcon from '@material-ui/icons/MoreVert'

const DesktopDisplay = ({ itens, data, anchorEl, handleClick, handleClose, selected, classes }) => {
  const fixed = itens.filter(f => f.fixed)
  const notFixed = itens.filter(f => !f.fixed)
  return (
    <React.Fragment>
      {notFixed.length === itens.length && itens.map((m, i) => (
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
      {
        fixed.length > 0 && fixed.map((m, i) => (
          <Tooltip key={`${data.id}-${i}`} title={m.name}>
            <IconButton aria-label={m.ariaLabel || m.name}
              onClick={() => {
                m.handleClick(data)
              }}
            >
              {m.icon}
            </IconButton>
          </Tooltip>
        ))
      }
      {
        fixed.length > 0 && <React.Fragment>
          <IconButton onClick={(e) => handleClick(e, data)}><MoreVertIcon /></IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            {notFixed.map((item, i) => (
              <MenuItem key={i} aria-label={item.ariaLabel || item.name}
                onClick={(event) => {
                  item.handleClick(selected, event)
                  handleClose()
                }}
              >
                {item.component && <item.component />}
                {
                  (typeof item.icon === 'function' || typeof item.icon === 'object') && item.name
                    ? (
                      <React.Fragment>
                        <ListItemIcon className={classes.icon}>
                          {typeof item.icon === 'object' ? item.icon : <item.icon />}
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary={item.name} />
                      </React.Fragment>
                    )
                    : item.name
                }
              </MenuItem>
            ))}
          </Menu>
        </React.Fragment>
      }
    </React.Fragment>
  )
}
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
