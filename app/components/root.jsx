import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";


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
        <div>Hello Ben</div>
        <div style={{height: '500px'}} ref="googleMap"></div>
      </div>
    }
});
