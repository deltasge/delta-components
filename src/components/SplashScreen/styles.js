export default (theme) => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  logoContainer: {
    textAlign: 'center'
  },
  logo: {
    maxWidth: '450px',
    [theme.breakpoints.up('md')]: {
      maxWidth: '400px'
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '300px'
    }
  },
  title: {
    fontWeight: '500'
  },
  subtitle: {
    margin: theme.spacing.unit * 2
  },
  progress: {
    marginTop: theme.spacing.unit * 4
  }
})
