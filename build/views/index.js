'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Yo = _react2.default.createClass({
  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      ' ',
      this.props.map.topic,
      ' uses ',
      this.props.map.theme,
      ' as a theme '
    );
  }
});

exports.default = _react2.default.createClass({
  initialize: function initialize() {
    var mapProp = {
      center: new google.maps.LatLng(31.648498, -40),
      zoom: 2,
      scrollwheel: false,
      panControl: false,
      zoomControl: true,
      scaleControl: false,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(this.refs.googleMap.getDOMNode(), mapProp);
  },
  componentDidMount: function componentDidMount() {
    debugger;
    console.log('yooooo');
    google.maps.event.addDomListener(window, 'load', this.initialize);
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        null,
        'Hello Ben, ',
        this.props.map.topic,
        ' '
      ),
      _react2.default.createElement('div', { ref: 'googleMap' }),
      _react2.default.createElement(Yo, { map: this.props.map })
    );
  }
});