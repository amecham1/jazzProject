import React from 'react'
import './header.scss'
import Banner from '../Banner/Banner'
import SiteSponser from '../siteSponser/SiteSponser'
import HeaderMenu from '../Header-Menu/HeaderMenu'
import SocialMedia from '../socialMedia/SocialMedia'
// Below is for the menu in the mobile responsive view
import HamMenu from '../HAM/HamMenu'
import SideMenu from '../sideMenu/SideMenu'
// import SideMenuContent from './SideMenuContent/SideMenuContent'
class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
    this.handleViewSideMenu = this.handleViewSideMenu.bind(this)
  }
  handleViewSideMenu () {
    this.setState({
      menuOpen: !(this.state.menuOpen)
    })
  }
  render () {
    return (
      <div className='main-header'>
        <Banner />
        <img className='jazz-logo-header' src='js/img/jazz-logo.svg' alt='Jazz-logo' />
        <SiteSponser />
        <HeaderMenu />
        <SocialMedia />
        <HamMenu onClick={this.handleViewSideMenu} />
        <SideMenu isOpen={this.state.menuOpen} />
        {/* <SideMenuContent isOpen={this.state.open} /> */}
      </div>
    )
  }
}

export default Header
