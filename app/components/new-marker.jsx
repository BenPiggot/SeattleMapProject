import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default React.createClass({

  render() {
    return <ReactCSSTransitionGroup transitionName="add-form" transitionAppear={true} transitionAppearTimeout={500}>
      <div className='add-form'>
        <form>
          <input type='text' />
          <input type='submit' />
        </form>
      </div>
    </ReactCSSTransitionGroup>
  }
})