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
    const mostlyGray = [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"administrative","elementType":"labels","stylers":[{"saturation":"-100"}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"gamma":"0.75"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"lightness":"-37"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"saturation":"-100"},{"lightness":"100"}]},{"featureType":"landscape.natural","elementType":"labels.text.fill","stylers":[{"saturation":"-100"},{"lightness":"-37"}]},{"featureType":"landscape.natural","elementType":"labels.text.stroke","stylers":[{"saturation":"-100"},{"lightness":"100"},{"weight":"2"}]},{"featureType":"landscape.natural","elementType":"labels.icon","stylers":[{"saturation":"-100"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"saturation":"-100"},{"lightness":"80"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"saturation":"-100"},{"lightness":"15"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"saturation":"-100"}]},{"featureType":"poi.attraction","elementType":"geometry","stylers":[{"lightness":"40"},{"visibility":"off"}]},{"featureType":"poi.attraction","elementType":"labels.text","stylers":[{"saturation":"7"},{"gamma":"0.50"}]},{"featureType":"poi.attraction","elementType":"labels.icon","stylers":[{"saturation":"0"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"},{"visibility":"on"},{"saturation":"-95"},{"lightness":"62"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road","elementType":"labels","stylers":[{"saturation":"-100"},{"gamma":"1.00"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"gamma":"0.50"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"saturation":"-100"},{"gamma":"0.50"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"},{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"lightness":"-13"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"lightness":"0"},{"gamma":"1.09"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"},{"saturation":"-100"},{"lightness":"47"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"lightness":"-12"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"saturation":"-100"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"},{"lightness":"77"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"lightness":"-5"},{"saturation":"-100"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"saturation":"-100"},{"lightness":"-15"}]},{"featureType":"transit.station.airport","elementType":"geometry","stylers":[{"saturation":"-100"},{"lightness":"47"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]},{"featureType":"water","elementType":"geometry","stylers":[{"saturation":"53"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":"100"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#009cff"},{"saturation":"-40"},{"lightness":"8"},{"weight":"3"}]}]
    const mapProp = {
      center: new google.maps.LatLng(47.6097, -122.3331),
      zoom: 12,
      scrollwheel: false,
      panControl: false,
      zoomControl: true,
      scaleControl: false,
      streetViewControl: false,
      mapTypeclassName: google.maps.MapTypeId.ROADMAP,
      styles: mostlyGray

    };

     const map = new google.maps.Map(this.refs.googleMap.getDOMNode(), mapProp);

     $.get('/data/commerce', (data) => {
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

  openAddForm() {
    debugger
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
      <div style={{height: this.state.height }} className="googleMap" ref="googleMap"></div>
        <div id="target">
          <div id="mobile-wrapper">
            <h1>Commercial History</h1>
          </div>
          <div className="title"></div>
          { this.state.showForm ? <NewMarker subject={this.props.subject} closeForm={this.closeddForm} initialize={this.initialize}/> : null }
          <div onClick={this.openAddForm} className="new-marker">ADD LOCATION</div>
          <div onClick={this.handleClick} className="return">MAIN MENU</div>
        </div>
      </div>
    }
});