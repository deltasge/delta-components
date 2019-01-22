'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = require('@material-ui/core/styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _CircularProgress = require('@material-ui/core/CircularProgress');

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressButton = function ProgressButton(_ref) {
  var classes = _ref.classes,
      loading = _ref.loading,
      type = _ref.type,
      label = _ref.label,
      variant = _ref.variant,
      color = _ref.color,
      disabled = _ref.disabled,
      component = _ref.component,
      htmlFor = _ref.htmlFor,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? null : _ref$onClick;
  return _react2.default.createElement(
    'div',
    { className: classes.rootButton },
    _react2.default.createElement(
      'div',
      { className: classes.wrapperButton },
      _react2.default.createElement(
        _Button2.default,
        { type: type, disabled: loading || disabled, variant: variant, color: color, className: classes.button, component: component, onClick: onClick, htmlFor: htmlFor },
        label
      ),
      loading && _react2.default.createElement(_CircularProgress2.default, { size: 24, className: classes.buttonProgress })
    )
  );
};

ProgressButton.propTypes = {
  /** Loading */
  loading: _propTypes2.default.bool,
  /** Desabilita o botão */
  disabled: _propTypes2.default.bool,
  /** Tipo do Botão */
  type: _propTypes2.default.string.isRequired,
  /** Label do Botão */
  label: _propTypes2.default.string.isRequired,
  /** Variação do Botão */
  variant: _propTypes2.default.oneOf(['text', 'flat', 'outlined', 'contained', 'raised', 'fab', 'extendedFab']),
  /** Cor do botão */
  color: _propTypes2.default.oneOf(['default', 'inherit', 'primary', 'secondary']),
  /** Componente */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func, _propTypes2.default.object])
};

ProgressButton.defaultProps = {
  color: 'default',
  disabled: false,
  type: 'button',
  variant: 'text',
  component: 'button'
};

exports.default = (0, _withStyles2.default)(_styles2.default)(ProgressButton);