import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import ToggleIcon from 'material-ui-toggle-icon'

const styles = {
  root: {}, input: {}
}

class PasswordField extends React.Component {
  state = { visible: this.props.visible }
  componentWillReceiveProps (nextProps) {
    if (nextProps.visible !== this.props.visible) this.setState({ visible: nextProps.visible })
  }
  toggleVisibility = () => this.setState(({ visible }) => ({ visible: !visible }))
  handleButtonMouseDown = (e) => e.preventDefault()
  render () {
    const { classes, buttonDisabled, visible: visibleProp, ...other } = this.props
    const { visible } = this.state
    return (
      <TextField {...other} type={this.state.visible ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton onClick={this.toggleVisibility} onMouseDown={this.handleButtonMouseDown} disabled={other.disabled || buttonDisabled}>
                <ToggleIcon on={visible} onIcon={<Visibility />} offIcon={<VisibilityOff />} />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    )
  }
}

PasswordField.defaultProps = {
  buttonDisabled: false,
  visible: false
}

PasswordField.propTypes = {
  ...TextField.propTypes,
  buttonDisabled: PropTypes.bool,
  visible: PropTypes.bool
}

export default withStyles(styles)(PasswordField)
