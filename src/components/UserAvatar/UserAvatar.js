import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'

import styles from './styles'

const nameInitials = (str) => {
  const t = str.match(/\b\w/g) || []
  return ((t.shift() || '') + (t.shift() || '')).toUpperCase()
}

const UserAvatar = ({ name, image, initials, subtitle, classes, background }) => {
  const myInitiais = nameInitials(name)
  return (
    <Paper elevation={1} className={classes.root}>
      <Grid container>
        <Grid item>
          {!image && <Avatar className={classNames(classes[background], classes.iniciais)} color='primary'>{initials || myInitiais}</Avatar> }
          {image && <Avatar className={classes.imagem} alt={name} src={image} />}
        </Grid>
        <Grid item>
          <Typography variant='h6' className={classes.nome}>{name}</Typography>
          <Typography variant='body2' className={classes.subtitulo}>{subtitle}</Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}
UserAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  initials: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  background: PropTypes.oneOf(['blue', 'default', 'red', 'pink', 'indigo'])
}

export default withStyles(styles)(UserAvatar)
