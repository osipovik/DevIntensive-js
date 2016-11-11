(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('express')) :
  typeof define === 'function' && define.amd ? define(['express'], factory) :
  (factory(global.express));
}(this, (function (express) { 'use strict';

express = 'default' in express ? express['default'] : express;

var app = express();

app.get('/', function (req, res) {
  res.json({
    hello: 'JS World'
  });
});

})));
//# sourceMappingURL=index.umd.js.map
