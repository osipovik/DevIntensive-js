'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var express = _interopDefault(require('express'));

var app = express();

app.get('/', function (req, res) {
  res.json({
    hello: 'JS World'
  });
});
//# sourceMappingURL=index.js.map
