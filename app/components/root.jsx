import React from 'react';
import Bar from '../components/bar';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

const Yo = React.createClass({
  render() {
    return <div> {this.props.map.topic} uses {this.props.map.theme} as a theme </div>
  }
})

export default React.createClass({

   initialize() {
    const mapProp = {
      center: new google.maps.LatLng(31.648498, -40),
      zoom: 2,
      scrollwheel: false,
      panControl: false,
      zoomControl: true,
      scaleControl: false,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

     const map = new google.maps.Map(this.refs.googleMap.getDOMNode(), mapProp);
  },

  componentDidMount() {
    debugger
    console.log('yooooo')
    google.maps.event.addDomListener(window, 'load', this.initialize);
  },

  render() {
    return <div>
        <div>Hello Ben, {this.props.map.topic} </div>
        <div ref="googleMap"></div>
        <Yo map={this.props.map} />
        <Bar />
      </div>
    }
});
