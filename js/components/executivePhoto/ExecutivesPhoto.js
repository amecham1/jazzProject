import React from 'react'
import './executive-photo.scss'

class ExecutivesPhoto extends React.Component {
  render () {
    return (
      <div className='executive-photo-container'>
        <div className='executive-photo-top'>
          <img className='executive-main-photo' src='js/img/executivePhotos/View-Arena.jpg' alt='View of the Vivint Arena Interior' />
        </div>
        <div className='executive-photo-bottom'>
          <img className='executive-group-photo executive-placement-left' src='js/img/suiteCarousel/Jazz-Food-092.jpg' alt='photo of buffet selection' />
          <img className='executive-group-photo executive-placement-right' src='js/img/suiteCarousel/Buffet-selection.jpg' alt='interior of empty luxury suite' />
        </div>
      </div>
    )
  }
}

export default ExecutivesPhoto
