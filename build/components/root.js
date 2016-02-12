'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bar = require('/Users/ben/SeattleMapProject/lib/components/bar');

var _bar2 = _interopRequireDefault(_bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Yo = _react2.default.createClass({
  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      ' Yo!!! '
    );
  }
});

exports.default = _react2.default.createClass({
  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        null,
        'Hello Ben'
      ),
      _react2.default.createElement(Yo, null),
      _react2.default.createElement(_bar2.default, null)
    );
  }
});