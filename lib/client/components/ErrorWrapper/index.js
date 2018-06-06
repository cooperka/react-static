'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ErrorCatcher = require('./ErrorCatcher');

var _ErrorCatcher2 = _interopRequireDefault(_ErrorCatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var ErrorWrapper = function ErrorWrapper(_ref) {
  var showErrorsInProduction = _ref.showErrorsInProduction,
      children = _ref.children;

  if (process.env.REACT_STATIC_ENV === 'development' || showErrorsInProduction) {
    return _react2.default.createElement(
      _ErrorCatcher2.default,
      null,
      children
    );
  }

  return _react2.default.Children.only(children);
};

ErrorWrapper.propTypes = {
  showErrorsInProduction: _propTypes2.default.bool,
  children: _propTypes2.default.node.isRequired
};

ErrorWrapper.defaultProps = {
  showErrorsInProduction: false
};

var _default = ErrorWrapper;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ErrorWrapper, 'ErrorWrapper', 'src/client/components/ErrorWrapper/index.js');
  reactHotLoader.register(_default, 'default', 'src/client/components/ErrorWrapper/index.js');
  leaveModule(module);
})();

;