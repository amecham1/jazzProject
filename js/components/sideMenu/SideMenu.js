import React from 'react'
import './side-menu.scss'

import SideMenuContent from '../SideMenuContent/SideMenuContent'

class SideMenu extends React.Component {
  render () {
    var sidebarcontainer = this.props.isOpen ? 'open' : 'sidemenu'
    return (
      <div className={sidebarcontainer}>
        <SideMenuContent />
      </div>
    )
  }
}
SideMenu.propTypes = {
  isOpen: React.PropTypes.bool
}
export default SideMenu
