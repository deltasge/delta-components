import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

import styles from './styles'

const ProgressButton = ({ classes, loading, type, label, variant, color, disabled, component, htmlFor, onClick = null }) => (
  <div className={classes.rootButton}>
    <div className={classes.wrapperButton}>
      <Button type={type} disabled={loading || disabled} variant={variant} color={color} className={classes.button} component={component} onClick={onClick} htmlFor={htmlFor}>{label}</Button>
      {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
    </div>
  </div>
)

ProgressButton.propTypes = {
  /** Loading */
  loading: PropTypes.bool,
  /** Desabilita o botão */
  disabled: PropTypes.bool,
  /** Tipo do Botão */
  type: PropTypes.string.isRequired,
  /** Label do Botão */
  label: PropTypes.string.isRequired,
  /** Variação do Botão */
  variant: PropTypes.oneOf(['text', 'flat', 'outlined', 'contained', 'raised', 'fab', 'extendedFab']),
  /** Cor do botão */
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  /** Componente */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object])
}

ProgressButton.defaultProps = {
  color: 'default',
  disabled: false,
  type: 'button',
  variant: 'text',
  component: 'button'
}

export default withStyles(styles)(ProgressButton)
