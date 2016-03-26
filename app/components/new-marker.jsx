import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default React.createClass({

  handleSubmit(e) {
    e.preventDefault()
    const path = this.props.subject.toLowerCase().replace(' ', '-')
    debugger
    $.ajax({
      method: 'POST',
      url: `/new/${path}`, 
      data: $(this.refs.form).serialize(), 
      success: (data) => {
        console.log(data)
        this.props.closeForm()
      }
    })
  },

  render() {
    return <ReactCSSTransitionGroup transitionName="add-form" transitionAppear={true} transitionAppearTimeout={500}>
      <div onSubmit={this.handleSubmit} className='add-form'>
        <form ref='form'>
          <fieldset className='form-group'>
            <input className='form-control' type='text' name='location' placeholder='Location' />
          </fieldset>
          <fieldset className='form-group'>
            <input className='form-control' type='text' name='description' placeholder='Description' />
          </fieldset>
          <fieldset className='form-group'>
            <input className='form-control' type='text' name='image' placeholder="Image URL" />
          </fieldset>
          <button className='btn btn-primary' type='submit'>Submit</button>
        </form>
      </div>
    </ReactCSSTransitionGroup>
  }
})