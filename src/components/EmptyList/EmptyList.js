import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

import styles from './styles'

/**
 * Apresentar uma lista vazia
 */

const EmptyList = ({ classes, title, subtitle }) => (
  <List component={Paper}>
    <ListItem>
      <ListItemText
        primary={
          <Typography variant='h6'>{title}</Typography>
        }
        secondary={
          subtitle && <Typography variant='body2'>{subtitle}</Typography>
        }
      />
    </ListItem>
  </List>
)

EmptyList.propTypes = {
  /** Titulo a ser apresentado */
  title: PropTypes.string.isRequired,
  /** Subtitulo a ser apresentado */
  subtitle: PropTypes.string
}

export default withStyles(styles)(EmptyList)
