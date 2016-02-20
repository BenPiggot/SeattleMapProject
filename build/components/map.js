"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactGoogleMaps = require("react-google-maps");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_reactGoogleMaps.GoogleMapLoader);
exports.default = _react2.default.createClass({
  render: function render() {
    var _this = this;

    debugger;
    return _react2.default.createElement(_reactGoogleMaps.GoogleMapLoader, {
      containerElement: _react2.default.createElement("div", _extends({}, this.props, { style: { height: "100%" } })),

      googleMapElement: _react2.default.createElement(_reactGoogleMaps.GoogleMap, {
        ref: function ref(map) {
          return (_this._googleMapComponent = map) && console.log(map.getZoom());
        },
        defaultZoom: 3,
        defaultCenter: { lat: -25.363882, lng: 131.044922 } }) });
  }
});