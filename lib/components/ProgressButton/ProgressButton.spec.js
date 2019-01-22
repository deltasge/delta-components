'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _enzyme = require('enzyme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<ProgressButton />', function () {
  it('should mount', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { type: 'button', label: 'Label' }));
    expect(wrapper.containsMatchingElement(_react2.default.createElement(
      'span',
      null,
      'Label'
    ))).toEqual(true);
  });
  it('matches the snapshot', function () {
    var tree = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { type: 'button', label: 'Label' }));
    expect(tree).toMatchSnapshot();
  });
  it('should mount disabled button', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { type: 'button', label: 'Label', disabled: true }));
    expect(wrapper.containsMatchingElement(_react2.default.createElement(
      'button',
      { type: 'button', disabled: true },
      _react2.default.createElement(
        'span',
        null,
        'Label'
      )
    ))).toEqual(true);
  });
  it('should mount loading button', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { type: 'button', label: 'Label', loading: true }));
    expect(wrapper.find('circle').length).toEqual(1);
  });
}); /* global describe it expect */