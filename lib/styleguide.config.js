'use strict';

var _require = require('@webpack-blocks/webpack2'),
    createConfig = _require.createConfig;

var babel = require('@webpack-blocks/babel6');
var path = require('path');

var webpackConfig = createConfig([babel()]);

webpackConfig.resolve.alias = {};
webpackConfig.resolve.alias['rsg-components/Wrapper'] = path.join(__dirname, 'src/styleguide/Wrapper');

module.exports = {
  skipComponentsWithoutExample: true,
  components: 'src/components/**/[A-Z]*.js',
  webpackConfig: webpackConfig
};