```
const { Button } = require('@material-ui/core');

initialState = {
  loading: false
};

reload = () => {
  const { loading } = state
  setState({ loading: !loading })
}

<div>
  <ProgressButton variant='contained' color='secondary' loading={state.loading} label='Label' type='button' />
  <Button variant='contained' onClick={reload}>Loading</Button>
</div>
```
