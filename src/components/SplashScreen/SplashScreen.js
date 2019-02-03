import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'

import SnackbarContent from '../Snackbar/SnackbarContent'

import styles from './styles'

/**
 * Componente para simular um splash screen
 */

const SplashScreen = ({ logo, classes, loading, error, subtitle }) => (
  <Grid container direction='column' justify='center' alignItems='center' className={classes.root}>
    <Grid item>
      <div className={classes.logoContainer}>
        <img src={logo} alt='Logo' className={classes.logo} />
      </div>
      {subtitle && <Typography className={classes.subtitle} color='primary' variant='h5' align='center' gutterBottom>{subtitle}</Typography>}
    </Grid>
    <Grid item>
      { loading && <CircularProgress color='secondary' className={classes.progress} /> }
      { error && <SnackbarContent variant='error' message={error || 'Erro inesperado'} />}
    </Grid>
  </Grid>
)

SplashScreen.defaultProps = {
  loading: false
}

SplashScreen.propTypes = {
  /** Apresentar o loading */
  loading: PropTypes.bool,
  /** Mensagem de erro */
  error: PropTypes.string,
  /** Logo */
  logo: PropTypes.string.isRequired,
  /** Sub titulo */
  subtitle: PropTypes.string
}
export default withStyles(styles)(SplashScreen)
