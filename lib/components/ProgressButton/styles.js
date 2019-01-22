'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _blue = require('@material-ui/core/colors/blue');

var _blue2 = _interopRequireDefault(_blue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (theme) {
  return {
    rootButton: {
      display: 'flex',
      alignItems: 'center'
    },
    wrapperButton: {
      position: 'relative'
    },
    buttonProgress: {
      color: _blue2.default[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12
    },
    button: {
      float: 'right'
    }
  };
};