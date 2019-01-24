import React from 'react'
import PropTypes from 'prop-types'

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'

import MoreVertIcon from '@material-ui/icons/MoreVert'

const MobileDisplay = ({ itens, data, anchorEl, handleClick, handleClose, selected, classes }) => (
  <React.Fragment>
    <IconButton onClick={(e) => handleClick(e, data)}><MoreVertIcon /></IconButton>
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
      {itens.map((item, i) => (
        <MenuItem key={i}
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
)

MobileDisplay.protoTypes = {
  classes: PropTypes.object.isRequired,
  itens: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.node]),
    handleClick: PropTypes.func.isRequired
  })).isRequired,
  data: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }).isRequired,
  anchorEl: PropTypes.any.isRequired,
  handleClose: PropTypes.func.isRequired,
  selected: PropTypes.object.isRequired
}

export default MobileDisplay
