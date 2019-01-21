'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('@material-ui/core/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = (0, _styles.createMuiTheme)({});

var Wrapper = function (_Component) {
  (0, _inherits3.default)(Wrapper, _Component);

  function Wrapper() {
    (0, _classCallCheck3.default)(this, Wrapper);
    return (0, _possibleConstructorReturn3.default)(this, (Wrapper.__proto__ || (0, _getPrototypeOf2.default)(Wrapper)).apply(this, arguments));
  }

  (0, _createClass3.default)(Wrapper, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _styles.MuiThemeProvider,
        { theme: theme },
        _react2.default.createElement(
          'div',
          { style: { fontFamily: 'Roboto, sans-serif' } },
          this.props.children
        )
      );
    }
  }]);
  return Wrapper;
}(_react.Component);

exports.default = Wrapper;