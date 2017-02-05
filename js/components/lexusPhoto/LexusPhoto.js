import React from 'react'
import './lexus-photo.scss'

class LexusPhotoContainer extends React.Component {
  render () {
    return (
      <div className='lexus-photo-container'>
        <div className='lexus-photo-top'>
          <img className='lexus-main-photo' src='js/img/suiteCarousel/607A9789.jpg' alt='View of the Vivint Arena Interior' />
        </div>
        <div className='suite-photo-bottom'>
          <img className='lexus-group-photo suite-placement-left' src='js/img/suiteCarousel/607A9787.jpg' alt='photo of buffet selection' />
          <img className='lexus-group-photo suite-placement-right' src='js/img/suiteCarousel/607A9797.jpg' alt='interior of empty luxury suite' />
        </div>
      </div>
    )
  }
}

export default LexusPhotoContainer
