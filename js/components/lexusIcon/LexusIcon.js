import React from 'react'
import './lexus-icon.scss'

class LexusIcon extends React.Component {
  render () {
    return (
      <div className='lexus-logo-container'>
        <img className='lexus-logo' src='js/img/Lexus Logo Horizontal_Black_RGB.png' alt='Lexus logo' />
        <p className='logo-presented-by'>Sponsored by </p>
      </div>
    )
  }
}

export default LexusIcon
