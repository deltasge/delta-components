```
const { Button } = require('@material-ui/core');

initialState = {
  disabled: false,
  visible: false
};

disable = () => {
  const { disabled } = state
  setState({ disabled: !disabled })
}

show = () => {
  const { visible } = state
  setState({ visible: !visible })
}

<div>
  <PasswordField buttonDisabled={state.disabled} visible={state.visible} variant='outlined' label='Password' />
  <br />
  <br />
  <Button variant='contained' onClick={disable}>Disabled Button</Button> <Button variant='contained' onClick={show}>Show</Button>
</div>
```
