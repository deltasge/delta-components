'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentPropType = require('@material-ui/utils/componentPropType');

var _componentPropType2 = _interopRequireDefault(_componentPropType);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Grid = require('@material-ui/core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Avatar = require('@material-ui/core/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _withStyles = require('@material-ui/core/styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Componente para gerar a lista de Links para as redes sociais
 */

var SocialMediaButtons = function (_Component) {
  (0, _inherits3.default)(SocialMediaButtons, _Component);

  function SocialMediaButtons() {
    (0, _classCallCheck3.default)(this, SocialMediaButtons);
    return (0, _possibleConstructorReturn3.default)(this, (SocialMediaButtons.__proto__ || (0, _getPrototypeOf2.default)(SocialMediaButtons)).apply(this, arguments));
  }

  (0, _createClass3.default)(SocialMediaButtons, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          itens = _props.itens,
          classes = _props.classes;

      return _react2.default.createElement(
        _Grid2.default,
        { container: true, spacing: 0, justify: 'center', alignItems: 'center' },
        itens.map(function (item, i) {
          return _react2.default.createElement(
            _Grid2.default,
            { item: true, key: i },
            _react2.default.createElement(
              _Avatar2.default,
              { className: (0, _classnames2.default)(classes.avatar, (0, _defineProperty3.default)({}, classes['background' + item.background], item.background)) },
              _react2.default.createElement(
                _IconButton2.default,
                { href: item.link },
                _react2.default.createElement(item.icon, { className: (0, _classnames2.default)((0, _defineProperty3.default)({}, classes['color' + item.color], item.color)) })
              )
            )
          );
        })
      );
    }
  }]);
  return SocialMediaButtons;
}(_react.Component);

SocialMediaButtons.propTypes = {
  /** Itens da rede social */
  itens: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    /** Cor do fundo */
    background: _propTypes2.default.oneOf(['primary', 'secondary', 'white', 'facebook', 'google', 'linkedin', 'transparent']),
    /** Cor do Icone */
    color: _propTypes2.default.oneOf(['primary', 'secondary', 'white', 'facebook', 'google', 'linkedin', 'transparent']),
    /** Link do callback da rede social */
    link: _propTypes2.default.string.isRequired,
    /** Componente de icone da rede social */
    icon: _componentPropType2.default
  }))
};
exports.default = (0, _withStyles2.default)(_styles2.default)(SocialMediaButtons);