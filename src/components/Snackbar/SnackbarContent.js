import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

import MUiSnackbarContent from '@material-ui/core/SnackbarContent'

import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import WarningIcon from '@material-ui/icons/Warning'
import Avatar from '@material-ui/core/Avatar'

import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'

import styles from './styles'

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
}

const SnackbarContent = (props) => {
  const { classes, className, message, onClose, variant, avatar, ...other } = props
  const Icon = variant && variantIcon[variant]
  return (
    <MUiSnackbarContent className={classNames(classes[variant], className)} aria-describedby='client-snackbar'
      message={
        <span id='client-snackbar' className={classes.message}>
          {avatar && <Avatar src={avatar} alt='Avatar' className={classes.avatar} /> }
          {!avatar && Icon && <Icon className={classNames(classes.icon, classes.iconVariant)} />}
          {message}
        </span>
      }
      action={[
        other.actions,
        onClose && <IconButton key='close' aria-label='Close' color='inherit' className={classes.close} onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  )
}

SnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  avatar: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
  actions: PropTypes.node
}

export default withStyles(styles)(SnackbarContent)
