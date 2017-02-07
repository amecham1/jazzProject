import React from 'react'
import './side-menu-list.scss'

class SideMenuList extends React.Component {
  render () {
    return (
      <div className='header-side-menu'>
        <ul className='header-side-menu-list'>
          <li className='header-side-menu-item'>Tickets</li>
          <li className='header-side-menu-item'>Schedule</li>
          <li className='header-side-menu-item'>Team</li>
          <li className='header-side-menu-item'>Fans</li>
          <li className='header-side-menu-item'>Video</li>
          <li className='header-side-menu-item'>Game Night</li>
          <li className='header-side-menu-item'>Community</li>
          <li className='header-side-menu-item'>Shop</li>
        </ul>
      </div>
    )
  }
}

export default SideMenuList
