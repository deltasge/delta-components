'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SocialMediaButtons = require('./SocialMediaButtons');

var _SocialMediaButtons2 = _interopRequireDefault(_SocialMediaButtons);

var _enzyme = require('enzyme');

var _Facebook = require('mdi-material-ui/Facebook');

var _Facebook2 = _interopRequireDefault(_Facebook);

var _Google = require('mdi-material-ui/Google');

var _Google2 = _interopRequireDefault(_Google);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<SocialMediaButtons />', function () {
  it('should mount', function () {
    var itens = [{ link: '/auth/facebook/', icon: _Facebook2.default, background: 'facebook', color: 'white' }, { link: '/auth/google/', icon: _Google2.default, background: 'google', color: 'white' }];
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_SocialMediaButtons2.default, { itens: itens }));
    expect(wrapper.find('a[href="' + itens[0].link + '"]').exists()).toEqual(true);
    expect(wrapper.find('a[href="' + itens[1].link + '"]').exists()).toEqual(true);
  });
}); /* global describe it expect */