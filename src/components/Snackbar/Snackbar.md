```
const { Button } = require('@material-ui/core');

initialState = {
  success: false,
  error: false,
  default: false,
  warning: false, 
  info: false, 
  avatar: false,
  withAction: false
};
showSnackbar = (variant) => {
  const v = state[variant]
  setState({ [variant]: !v })
}
showWithAction = () => {
  setState({ withAction: true })
}
handleClose = () => {
  setState({ withAction: false })
}
<div>
  { state.success && <Snackbar variant='success' message='Message Success' /> }
  { state.error && <Snackbar variant='error' message='Message Error' /> }
  { state.default && <Snackbar message='Message Default' /> }
  { state.warning && <Snackbar variant='warning' message='Message Warning' /> }
  { state.info && <Snackbar variant='info' message='Message Info' /> }
  { state.avatar && <Snackbar message='Message with Avatar' avatar='https://picsum.photos/200/300/?random' /> }
  { state.withAction && <Snackbar message='Message with Action' actions={[
    <Button key="undo" color="secondary" size="small" onClick={handleClose}>
      UNDO
    </Button>
  ]} /> }
  <Button variant='contained' onClick={() => {showSnackbar('success')}}>Success</Button>
  <Button variant='contained' onClick={() => {showSnackbar('error')}}>Error</Button>
  <Button variant='contained' onClick={() => {showSnackbar('default')}}>Default</Button>
  <Button variant='contained' onClick={() => {showSnackbar('warning')}}>Warning</Button>
  <Button variant='contained' onClick={() => {showSnackbar('info')}}>Info</Button>
  <Button variant='contained' onClick={() => {showSnackbar('avatar')}}>With Avatar</Button>
  <Button variant='contained' onClick={showWithAction}>With Actions</Button>
</div>
```
