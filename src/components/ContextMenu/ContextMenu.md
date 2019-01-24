```
const Facebook = require('mdi-material-ui/Facebook');
const Google = require('mdi-material-ui/Delete');

const DeleteIcon = require('mdi-material-ui/Delete');
const CommentIcon = require('mdi-material-ui/Comment');

const itensMenu = [
  { name: 'Comment', icon: <CommentIcon.default />, handleClick: (data) => console.log('Comment', data)},
  { name: 'Delete', icon: <DeleteIcon.default />, handleClick: (data) => console.log('Delete', data) }
]

const data = {
  id: 1,
  name: 'Jon'
};

<div>
  <ContextMenu itens={itensMenu} data={data} />
</div>
```
