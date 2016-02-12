'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressHandlebars = require('express-handlebars');

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _root = require('./components/root');

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var router = _express2.default.Router();

app.engine('html', (0, _expressHandlebars2.default)({ extname: 'html' }));
app.set('view engine', 'html');
app.set('views', '/Users/ben/SeattleMapProject/app/views');

app.use(_express2.default.static(__dirname + "/public"));
app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.render('index', {
    reactHtml: _react2.default.renderToString(_react2.default.createElement(_root2.default, null))
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started ...");
});

exports.default = app;