import React from 'react'
import './side-menu-content.scss'

import SideMenuList from '../sideMenuList/SideMenuList'

class SideMenuContent extends React.Component {
  render () {
    return (
      <div className='side-menu-content-container'>
        <SideMenuList />
      </div>
    )
  }
}

export default SideMenuContent
