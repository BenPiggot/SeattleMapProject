import React from 'react';
import Culture from './culture.jsx';
import CivilRights from './civil-rights.jsx';
import Commerce from './commerce.jsx';
import Environment from './environment.jsx';
import SocialPolicy from './social-policy.jsx';
import Technology from './technology.jsx';


export default React.createClass({

  getInitialState() {
    return {
      height: '790px',
      subject: ''
    }
  },

  getViewport() {
    this.setState({
      height: window.innerHeight + 100
    })
  },

  initialize() {
    const shiftWorker = [{"stylers":[{"saturation":-100},{"gamma":0.6}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"saturation":50},{"gamma":0},{"hue":"#50a5d1"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"weight":0.5},{"color":"#333333"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"gamma":1},{"saturation":50}]}]
    const mapProp = {
      center: new google.maps.LatLng(47.6097, -122.3331),
      zoom: 10,
      scrollwheel: false,
      panControl: false,
      zoomControl: true,
      scaleControl: false,
      streetViewControl: false,
      mapTypeclassName: google.maps.MapTypeId.ROADMAP,
      styles: shiftWorker
    };

    const map = this.refs.googleMap ?
                new google.maps.Map(this.refs.googleMap.getDOMNode(), mapProp) :
                new google.maps.Map(document.getElementsByClassName('googleMap')[0], mapProp)

    $.get('/data', (data) => {
      data.result.forEach( (r) => {
        new google.maps.Marker({
          position: {lat: r.latitude, lng: r.longitude},
          map: map,
          icon: './images/greypin.png'
        });
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

  refreshPage() {
    window.location.reload()
  },

  handleClick(e) {
    this.setState({
      subject: e.target.lastChild.textContent
    })
  },

  render() {
    const props = {
      subject: this.state.subject,
      refreshPage: this.refreshPage
    };

    switch(this.state.subject) {
      case 'Culture':
        return <Culture {...props} />
      case 'Civil Rights':
        return <CivilRights {...props} />
      case 'Commerce':
        return <Commerce {...props} />
      case 'Environment':
        return <Environment {...props} />
      case 'Social Policy':
        return <SocialPolicy {...props} />
      case 'Technology':
        return <Technology {...props} />
      default: 
        return (
          <div subject={this.state.subject}>
            <div style={{height: this.state.height }} className="googleMap" ref="googleMap"></div>
            <div id="target" className="innerHeader">
              <div id="mobile-wrapper">
                <h1>Seattle Backstory</h1>
                <p id="subhead">All the History that is fit to Map</p>
              </div>
              <footer id="vanishLater">
                <nav id="eventSearch">
                  <ul id="category">
                    <li onClick={this.handleClick}><a>Culture</a></li>
                    <li onClick={this.handleClick}><a>Civil Rights</a></li>
                    <li onClick={this.handleClick}><a>Commerce</a></li>
                    <li onClick={this.handleClick}><a>Environment</a></li>
                    <li onClick={this.handleClick}><a>Social Policy</a></li>
                    <li onClick={this.handleClick}><a>Technology</a></li>
                  </ul>
                </nav>
              </footer>
            </div>
            <div className="title"></div>
            <div className="over_map"></div>
          </div>
        )
      }
    }
});
