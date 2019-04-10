```
const { List, ListItem, Grid, Typography, Hidden, Paper, ListItemSecondaryAction } = require('@material-ui/core')
const EditIcon = require('@material-ui/icons/Edit')

const AccountRemoveIcon = require('mdi-material-ui/AccountRemove');
const AccountArrowRight = require('mdi-material-ui/AccountArrowRight');
const DeleteIcon = require('mdi-material-ui/Delete');
const CommentIcon = require('mdi-material-ui/Comment');

const itensMenu = [
  { name: 'Edit', icon: <EditIcon.default color='primary' />, fixed: true, handleClick: (data) => console.log('Edit', data), ariaLabel: 'Edit' },
  { name: 'Comment', icon: <CommentIcon.default />, handleClick: (data) => console.log('Comment', data), ariaLabel: 'Comment' },
  { name: 'Delete', icon: <DeleteIcon.default />, handleClick: (data) => console.log('Delete', data), ariaLabel: 'Delete', ariaLabel: 'Delete' },
  { name: 'Cancel', icon: <AccountRemoveIcon.default color='error' />, handleClick: (item) => console.log('Cancel', data), ariaLabel: 'Cancel' },
  { name: 'Info', icon: <AccountArrowRight.default />, handleClick: (item) => console.log('Info', data), ariaLabel: 'Info' }
]

const data = {
  id: 1,
  name: 'Jon'
};

<List component={Paper} disablePadding>
  <ListItem divider component='div' dense>
    <Grid container>
      <Grid item xs={2}>
        <Typography align='right' variant='caption'>Code</Typography>
      </Grid>
      <Grid item xs={5}>
        <Typography variant='body2'>Name</Typography>
        <Typography variant='caption'>Active</Typography>
      </Grid>
      <Hidden smDown>
        <Grid item>
          <Typography variant='caption'>Date</Typography>
          <Typography variant='caption'>Status</Typography>
        </Grid>
      </Hidden>
    </Grid>
    <ListItemSecondaryAction>
      <ContextMenu itens={itensMenu} data={data} />
    </ListItemSecondaryAction>
  </ListItem>
  <ListItem component='div' dense>
    <Grid container>
      <Grid item xs={2}>
        <Typography align='right' variant='caption'>Code</Typography>
      </Grid>
      <Grid item xs={5}>
        <Typography variant='body2'>Name</Typography>
        <Typography variant='caption'>Active</Typography>
      </Grid>
      <Hidden smDown>
        <Grid item>
          <Typography variant='caption'>Date</Typography>
          <Typography variant='caption'>Status</Typography>
        </Grid>
      </Hidden>
    </Grid>
    <ListItemSecondaryAction>
      <ContextMenu itens={itensMenu} data={data} />
    </ListItemSecondaryAction>
  </ListItem>
</List>
```
