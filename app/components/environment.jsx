import React from 'react';

export default React.createClass({

  getInitialState() {
    return {
      height: '790px'
    }
  },

  getViewport() {
    this.setState({
      height: window.innerHeight + 100
    })
  },

   initialize() {
    const nature = [{"featureType":"landscape","stylers":[{"hue":"#FFA800"},{"saturation":0},{"lightness":0},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#53FF00"},{"saturation":-73},{"lightness":40},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FBFF00"},{"saturation":0},{"lightness":0},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#00FFFD"},{"saturation":0},{"lightness":30},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#00BFFF"},{"saturation":6},{"lightness":8},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#679714"},{"saturation":33.4},{"lightness":-25.4},{"gamma":1}]}]
    const mapProp = {
      center: new google.maps.LatLng(47.6097, -122.3331),
      zoom: 12,
      scrollwheel: false,
      panControl: false,
      zoomControl: true,
      scaleControl: false,
      streetViewControl: false,
      mapTypeclassName: google.maps.MapTypeId.ROADMAP,
      styles: nature

    };

     const map = new google.maps.Map(this.refs.googleMap.getDOMNode(), mapProp);

     $.get('/data/environment', (data) => {
      data.result.forEach( (r) => {
        let infowindow = new google.maps.InfoWindow({});
        let marker = new google.maps.Marker({
          position: {lat: r.latitude, lng: r.longitude},
          map: map,
          icon: './images/greypin.png'
        });
        google.maps.event.addListener(marker, 'click', () => {
          infowindow.close()
          infowindow = new google.maps.InfoWindow({
            content: r.description
          });
          infowindow.open(map, marker);
        })
      })
    })
  },

  componentDidMount() {
    this.initialize()
    this.getViewport()
    window.addEventListener("resize", this.getViewport);
  },

  componentWillUnmount() {
    window.removeEventListener("resize", this.getViewport);
  },

  handleClick(e) {
    e.preventDefault()
    this.props.refreshPage()
  },

  render() {
    return <div>
      <div style={{height: this.state.height }} className="googleMap" ref="googleMap"></div>
        <div id="target">
          <div id="mobile-wrapper">
            <h1>Environmental History</h1>
          </div>
          <div className="title"></div>
          <div onClick={this.handleClick} className="return">MAIN MENU</div>
        </div>
      </div>
    }
});