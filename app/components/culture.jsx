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
    const shadowAgent = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-23"},{"lightness":"7"},{"visibility":"on"},{"gamma":"1"},{"hue":"#ff1800"},{"weight":"0.75"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e74c3c"},{"saturation":"-59"},{"lightness":"30"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#ff1800"},{"saturation":"2"},{"lightness":"2"},{"weight":"0.75"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"on"},{"saturation":"-100"},{"hue":"#f2f2f2"}]},{"featureType":"transit.station","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#2c3e50"},{"visibility":"on"}]}]
    const mapProp = {
      center: new google.maps.LatLng(47.6097, -122.3331),
      zoom: 12,
      scrollwheel: false,
      panControl: false,
      zoomControl: true,
      scaleControl: false,
      streetViewControl: false,
      mapTypeclassName: google.maps.MapTypeId.ROADMAP,
      styles: shadowAgent

    };

     const map = new google.maps.Map(this.refs.googleMap.getDOMNode(), mapProp);

     $.get('/data/culture', (data) => {
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
            <h1>Cultural History</h1>
          </div>
          <div className="title"></div>
          <div onClick={this.handleClick} className="return">MAIN MENU</div>
        </div>
      </div>
    }
});
