import React from 'react'
import './banner.scss'

class Banner extends React.Component {
  render () {
    return (
      <div className='banner-div'>
        <div className='banner-stripe' id='banner-color-one' />
        <div className='banner-stripe' id='banner-color-two' />
        <div className='banner-stripe' id='banner-color-three' />
      </div>
    )
  }
}

export default Banner
