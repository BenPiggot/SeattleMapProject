import React from 'react';
import {GoogleMapLoader, GoogleMap} from "react-google-maps";

console.log(GoogleMapLoader)
export default React.createClass({
  render () {
    debugger
    return <GoogleMapLoader
      containerElement={
        <div {...this.props} style={{ height: "100%"}} />
      }

    googleMapElement = {
      <GoogleMap
        ref={(map) => (this._googleMapComponent = map) && console.log(map.getZoom())}
        defaultZoom={3}
        defaultCenter={{lat: -25.363882, lng: 131.044922}} />
    } />

  }
})