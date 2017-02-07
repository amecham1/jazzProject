import React from 'react'
import './landing-photo.scss'

class LandingPhoto extends React.Component {
  render () {
    return (
      <div className='landing-photo-box'>
        <img className='landing-photo-acutal' src='js/img/BW Arena.jpg' alt='Vivint Arena interior during basketball game' />
        <img className='jazz-bball'src='' alt='' />
        <p className='landing-info landing-title'>PREMIUM SEATING</p>
        <p className='landing-info landing-sub-title'>EXPERIENCE ALL OF THE EXITEMENT IN LUXURY</p>
      </div>
    )
  }
}

export default LandingPhoto
