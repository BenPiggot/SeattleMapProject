import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default React.createClass({

  handleSubmit(e) {
    e.preventDefault()
    const path = this.props.subject.toLowerCase().replace(' ', '-')

    $.ajax({
      method: 'POST',
      url: `/new/${path}`, 
      data: $(this.refs.form).serialize(), 
      success: (data) => {
        console.log(data)
        this.props.closeForm()

        $.get(`/data/${path}`, (data) => {
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
      }
    })
  },

  render() {
    return <ReactCSSTransitionGroup transitionName="add-form" transitionAppear={true} transitionAppearTimeout={500}>
      <div onSubmit={this.handleSubmit} className='add-form'>
        <form ref='form'>
          <fieldset className='form-group'>
            <input className='form-control input-square' type='text' name='location' placeholder='Location' />
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