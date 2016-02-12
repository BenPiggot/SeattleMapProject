import React from 'react';
import Bar from '/Users/ben/SeattleMapProject/lib/components/bar';

const Yo = React.createClass({
  render() {
    return <div> Yo!!! </div>
  }
})

export default React.createClass({
  render() {
    return <div>
        <div>Hello Ben</div>
        <Yo />
        <Bar />
      </div>
    }
});
