import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default React.createClass({

  handleSubmit(e) {
    e.preventDefault()
    const path = this.props.subject.toLowerCase().replace(' ', '-')
    const data = $(this.refs.form).serializeArray()
      .reduce((a, x) => { a[x.name] = x.value; return a; }, {});

    $.ajax({
      method: 'POST',
      url: `/new/${path}`, 
      data: data,
      success: (data) => {
        this.props.closeForm();
        this.props.initialize();
      }
    })
  },

  handleClick() {
    this.props.closeForm();
  },

  render() {
    return <ReactCSSTransitionGroup transitionName="add-form" transitionAppear={true} transitionAppearTimeout={500}>
      <div onSubmit={this.handleSubmit} className='add-form'>
        <div className='add-form-header'>
          <div className='add-form-close' onClick={this.handleClick}>Close</div>
        </div>
        <form ref='form'>
          <fieldset className='form-group'>
            <input className='form-control input-square' type='text' name='location' placeholder='Location Name' />
          </fieldset>
          <fieldset className='form-group'>
            <input className='form-control input-square' type='text' name='address' placeholder='Address (Optional)' />
          </fieldset>
          <fieldset className='form-group'>
            <input className='form-control input-square' type='text' name='image' placeholder="Image URL" />
          </fieldset>
          <fieldset className='form-group'>
            <textarea className='form-control input-square' type='text' name='description' placeholder='Description' />
          </fieldset>
          <button className='btn btn-primary btn-square' type='submit'>Submit</button>
        </form>
      </div>
    </ReactCSSTransitionGroup>
  }
})