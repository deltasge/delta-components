import blue from '@material-ui/core/colors/blue'

export default (theme) => ({
  rootButton: {
    display: 'flex',
    alignItems: 'center'
  },
  wrapperButton: {
    position: 'relative'
  },
  buttonProgress: {
    color: blue[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  },
  button: {
    float: 'right'
  }
})
