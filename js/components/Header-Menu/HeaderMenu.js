import React from 'react'
import '../Header-menu/header-menu.scss'

class HeaderMenu extends React.Component {
  render () {
    return (
      <div className='header-menu'>
        <ul className='header-menu-list'>
          {/* none of these items are connected, no functionality to them,yet. */}
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
