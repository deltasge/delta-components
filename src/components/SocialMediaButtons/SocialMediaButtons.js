import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { componentPropType } from '@material-ui/utils'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

/**
 * Componente para gerar a lista de Links para as redes sociais
 */

class SocialMediaButtons extends Component {
  render () {
    const { itens, classes } = this.props
    return (
      <Grid container spacing={0} justify='center' alignItems='center'>
        {
          itens.map((item, i) => (
            <Grid item key={i}>
              <Avatar className={classNames(classes.avatar, { [classes[`background${item.background}`]]: item.background })}>
                <IconButton href={item.link}><item.icon className={classNames({ [classes[`color${item.color}`]]: item.color })} /></IconButton>
              </Avatar>
            </Grid>
          ))
        }
      </Grid>
    )
  }
}
SocialMediaButtons.propTypes = {
  /** Itens da rede social */
  itens: PropTypes.arrayOf(PropTypes.shape({
    /** Cor do fundo */
    background: PropTypes.oneOf(['primary', 'secondary', 'white', 'facebook', 'google', 'linkedin', 'transparent']),
    /** Cor do Icone */
    color: PropTypes.oneOf(['primary', 'secondary', 'white', 'facebook', 'google', 'linkedin', 'transparent']),
    /** Link do callback da rede social */
    link: PropTypes.string.isRequired,
    /** Componente de icone da rede social */
    icon: componentPropType
  }))
}
export default withStyles(styles)(SocialMediaButtons)
