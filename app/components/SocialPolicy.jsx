import React from 'react';
import NewMarker from './NewMarker.jsx'

export default React.createClass({

  getInitialState() {
    return {
      height: '790px',
      showForm: false
    }
  },

  getViewport() {
    this.setState({
      height: window.innerHeight + 100
    })
  },

  getViewportOffset(node) {
    const windowHeight = window.innerHeight;
    return windowHeight - node.offsetTop
  },

   initialize() {
    const subtleGrayscale = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"on"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
    const mapProp = {
      center: new google.maps.LatLng(47.6097, -122.3331),
      zoom: 12,
      scrollwheel: false,
      panControl: false,
      zoomControl: true,
      scaleControl: false,
      streetViewControl: false,
      mapTypeclassName: google.maps.MapTypeId.ROADMAP,
      styles: subtleGrayscale

    };

     const map = new google.maps.Map(this.refs.googleMap.getDOMNode(), mapProp);

     $.get('/data/social-policy', (data) => {
      data.result.forEach( (r) => {
        let marker = new google.maps.Marker({
          position: {lat: r.latitude, lng: r.longitude},
          map: map,
          icon: './images/greypin.png'
        });
        google.maps.event.addListener(marker, 'click', () => {
          let infowindow = new google.maps.InfoWindow({
            content: r.description
          });

          if ($('.gm-style > div > div+div > div > div').length > 1)
            $($('.gm-style > div > div+div > div > div')[0]).remove()

          infowindow.open(map, marker);

          const node = $('.gm-style > div > div+div > div > div')[0]

          setTimeout( () => {
            if (screen.width >= 600 && (this.getViewportOffset(node)) > 600) 
              map.panBy(0, -110);
          }, 600);
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

  openAddForm() {
    this.setState({
      showForm: true
    })
  },

  closeAddForm() {
    this.setState({
      showForm: false
    })
  },
  
  render() {
    return <div>
      <div style={{height: this.state.height}} className="googleMap" ref="googleMap"></div>
        <div id="target">
          <div id="mobile-wrapper">
            <h1>Social History</h1>
          </div>
          <div className="title"></div>
          { this.state.showForm ? <NewMarker subject={this.props.subject} closeForm={this.closeAddForm} initialize={this.initialize} /> : null }
          <div onClick={this.openAddForm} className="new-marker">ADD LOCATION</div>
          <div onClick={this.handleClick} className="return">MAIN MENU</div>
        </div>
      </div>
    }
});