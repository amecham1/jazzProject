import React from 'react'
import './header.scss'
import Banner from '../Banner/Banner.js'
import SiteSponser from '../siteSponser/SiteSponser.js'
import HeaderMenu from '../Header-Menu/HeaderMenu.js'
import SocialMedia from '../socialMedia/SocialMedia.js'
// Below is for the menu in the mobile responsive view
// import HamMenu from '../HAM/HamMenu.js'
class Header extends React.Component {
  render () {
    return (
      <div className='main-header'>
        <Banner />
        <img className='jazz-logo-header' src='js/img/jazz-logo.svg' alt='Jazz-logo' />
        <SiteSponser />
        <HeaderMenu />
        <SocialMedia />
        {/* <HamMenu onClick={this.openSidebar} /> */}
      </div>
    )
  }
}

export default Header
