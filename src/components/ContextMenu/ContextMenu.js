import React from 'react'
import PropTypes from 'prop-types'

import withStyles from '@material-ui/core/styles/withStyles'
import withWidth from '@material-ui/core/withWidth'

import DesktopDisplay from './components/DesktopDisplay'
import MobileDisplay from './components/MobileDisplay'

import styles from './style'
/**
 * Componente para criar um menu<br />
 * No desktop é exibido os ícones e no mobile é exibido estilo hamburguer
 */
class ContextMenu extends React.Component {
  state = {
    anchorEl: null,
    selected: null,
    showDialog: false
  }

  handleClick = (event, selected) => this.setState({ anchorEl: event.currentTarget, selected })
  handleClose = () => this.setState({ anchorEl: null, selected: null, showDialog: false })

  render () {
    const isMobile = this.props.isMobile.includes(this.props.width)

    return isMobile
      ? <MobileDisplay {...this.props} {...this.state} handleClick={this.handleClick} handleClose={this.handleClose} />
      : <DesktopDisplay {...this.props} {...this.state} />
  }
}

ContextMenu.defaultProps = {
  isMobile: ['xs', 'sm']
}

ContextMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  /**
   * Array de strings para exibir o menu mobile conforme as dimensões passadas<br />
   * Disponíveis: xs, sm, md, lg, xl
   */
  isMobile: PropTypes.arrayOf(PropTypes.string),
  /** Array de itens de menu para ser renderizado */
  itens: PropTypes.arrayOf(PropTypes.shape({
    /** Nome do item do menu */
    name: PropTypes.string.isRequired,
    /** Icone do menu */
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.node]).isRequired,
    /**
     * Função ao clicar no item do menu, r
     * Retorna o valor da props data.
     * */
    handleClick: PropTypes.func.isRequired,
    /** ARIA label */
    ariaLabel: PropTypes.string
  })).isRequired,
  /** Valor retornado no click */
  data: PropTypes.any.isRequired
}

export default withStyles(styles)(withWidth()(ContextMenu))
