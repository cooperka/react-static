'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var ErrorUI = function ErrorUI(_ref) {
  var error = _ref.error,
      errorInfo = _ref.errorInfo;
  return _react2.default.createElement(
    'div',
    {
      style: {
        margin: '1rem',
        padding: '1rem',
        background: 'rgba(0,0,0,0.05)'
      }
    },
    _react2.default.createElement(
      'h2',
      null,
      'Oh-no! Something\u2019s gone wrong!'
    ),
    _react2.default.createElement(
      'pre',
      { style: { whiteSpace: 'normal', color: 'red' } },
      _react2.default.createElement(
        'code',
        null,
        error && error.toString()
      )
    ),
    _react2.default.createElement(
      'h3',
      null,
      'This error occurred here:'
    ),
    _react2.default.createElement(
      'pre',
      { style: { color: 'red', overflow: 'auto' } },
      _react2.default.createElement(
        'code',
        null,
        errorInfo.componentStack
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      'For more information, please see the console.'
    )
  );
};

ErrorUI.propTypes = {
  error: _propTypes2.default.object.isRequired,
  errorInfo: _propTypes2.default.object.isRequired
};

var _default = ErrorUI;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ErrorUI, 'ErrorUI', 'src/client/components/ErrorWrapper/ErrorUI.js');
  reactHotLoader.register(_default, 'default', 'src/client/components/ErrorWrapper/ErrorUI.js');
  leaveModule(module);
})();

;