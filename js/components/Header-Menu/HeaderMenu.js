import React from 'react'
import '../header-menu/header-menu.scss'

class HeaderMenu extends React.Component {
  render () {
    return (
      <div className='header-menu'>
        <ul className='header-menu-list'>
          <li className='header-menu-item'>Tickets</li>
          <li className='header-menu-item'>Schedule</li>
          <li className='header-menu-item'>Team</li>
          <li className='header-menu-item'>Fans</li>
          <li className='header-menu-item'>Video</li>
          <li className='header-menu-item'>Game Night</li>
          <li className='header-menu-item'>Community</li>
          <li className='header-menu-item'>Shop</li>
        </ul>
      </div>
    )
  }
}

export default HeaderMenu