import React from 'react';
import Bar from '../components/bar';

const Yo = React.createClass({
  render() {
    return <div> {this.props.map.topic} uses {this.props.map.theme} as a theme </div>
  }
})

export default React.createClass({
  render() {
    return <div>
        <div>Hello Ben, {this.props.map.topic} </div>
        <Yo map={this.props.map} />
        <Bar />
      </div>
    }
});
