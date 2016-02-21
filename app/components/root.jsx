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
        <div style={{height: '1000px'}} className="googleMap" ref="googleMap"></div>
          <div id="target" className="innerHeader">
          <div id="mobile-wrapper">
            <h1>Seattle Backstory</h1>
            <p id="subhead">All the History that is fit to Map</p>
          </div>
         <footer id="vanishLater">
           <nav id="eventSearch">
            <ul id="category">
              <li id="culture"><a>Culture</a></li>
              <li id="civil-rights"><a>Civil Rights</a></li>
              <li id="commerce"><a>Commerce</a></li>
              <li id="environment"><a>Environment</a></li>
              <li id="social-policy"><a>Social Policy</a></li>
              <li id="technology"><a>Technology</a></li>
            </ul>
          </nav>
        </footer>
        </div>
        <div id="title"></div>
        <div id="over_map"></div>
      </div>
    }
});