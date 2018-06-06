'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var _default = {
  basePath: '',
  devBasePath: '',
  entry: './root/src/index.js',
  extractCssChunks: false,
  inlineCss: false,
  outputFileRate: 10,
  paths: {
    DIST: './root/tmp/dev-server',
    HTML_TEMPLATE: './root/tmp/dev-server/index.html',
    LOCAL_NODE_MODULES: './dirname/../../node_modules',
    NODE_MODULES: './root/node_modules',
    PACKAGE: './root/package.json',
    PUBLIC: './root/public',
    ROOT: './root/',
    SRC: './root/src',
    STATIC_DATA: './root/tmp/dev-server/staticData'
  },
  prefetchRate: 3,
  siteRoot: '',
  stagingBasePath: '',
  stagingSiteRoot: ''
};
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', 'src/static/__mocks__/defaultConfigDevelopment.mock.js');
  leaveModule(module);
})();

;