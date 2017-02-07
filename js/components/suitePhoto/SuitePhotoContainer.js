import React from 'react'
import './suite-photo.scss'

class SuitePhotoContainer extends React.Component {
  render () {
    return (
      <div className='suite-photo-container'>
        <div className='suite-photo-top'>
          <img className='suite-main-photo' src='js/img/suiteCarousel/Suite-View-Empty.jpg' alt='View of the Vivint Arena Interior' />
        </div>
        <div className='suite-photo-bottom'>
          <img className='suite-group-photo suite-placement-left' src='js/img/suiteCarousel/Suite-Arena-View.jpg' alt='photo of buffet selection' />
          <img className='suite-group-photo suite-placement-right' src='js/img/suiteCarousel/Buffet-selection.jpg' alt='interior of empty luxury suite' />
        </div>
      </div>
    )
  }
}

export default SuitePhotoContainer
