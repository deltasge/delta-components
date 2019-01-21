'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _red = require('@material-ui/core/colors/red');

var _red2 = _interopRequireDefault(_red);

var _blue = require('@material-ui/core/colors/blue');

var _blue2 = _interopRequireDefault(_blue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (theme) {
  return {
    avatar: {
      margin: theme.spacing.unit
    },
    backgroundlinkedin: {
      backgroundColor: _blue2.default[800]
    },
    colorlinkedin: {
      color: _blue2.default[800]
    },
    backgroundfacebook: {
      backgroundColor: _blue2.default[500]
    },
    colorfacebook: {
      color: _blue2.default[500]
    },
    backgroundgoogle: {
      backgroundColor: _red2.default[500]
    },
    colorgoogle: {
      color: _red2.default[500]
    },
    backgroundwhite: {
      backgroundColor: 'white'
    },
    colorwhite: {
      color: 'white'
    }
  };
};