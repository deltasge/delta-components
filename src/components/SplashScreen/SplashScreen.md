```
const { Button } = require('@material-ui/core');

initialState = {
  loading: false,
  error: false
};
loading = () => {
  const { loading } = state
  setState({ loading: !loading, error: false })
}
error = () => {
  const { error } = state
  setState({ loading: false, error: !error })
}

<div>
  <SplashScreen logo='https://picsum.photos/200/300/?random' loading={state.loading} error={state.error && 'Message error'} />
  <br/>
  <Button variant='contained' onClick={loading}>Loading</Button>
  <Button variant='contained' onClick={error}>Error</Button>
</div>
```
