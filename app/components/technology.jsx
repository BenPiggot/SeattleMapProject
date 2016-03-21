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
    const mint = [{"stylers":[{"hue":"#16a085"},{"saturation":0}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]}]
    const mapProp = {
      center: new google.maps.LatLng(47.6097, -122.3331),
      zoom: 12,
      scrollwheel: false,
      panControl: false,
      zoomControl: true,
      scaleControl: false,
      streetViewControl: false,
      mapTypeclassName: google.maps.MapTypeId.ROADMAP,
      styles: mint
    };

     const map = new google.maps.Map(this.refs.googleMap.getDOMNode(), mapProp);

     $.get('/data/technology', (data) => {
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
            <h1>Technological History</h1>
          </div>
          <div className="title"></div>
          <div onClick={this.handleClick} className="return">MAIN MENU</div>
        </div>
      </div>
    }
});