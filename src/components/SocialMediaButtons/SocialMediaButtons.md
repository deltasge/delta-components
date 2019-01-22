```
const Facebook = require('mdi-material-ui/Facebook');
const Google = require('mdi-material-ui/Google');

const links = [
  { link: `/auth/facebook/`, icon: Facebook.default, background: 'facebook', color: 'white' },
  { link: `/auth/google/`, icon: Google.default, background: 'google', color: 'white' }
];
<div>
  <SocialMediaButtons itens={links} />
</div>
```
