import React from 'react'
import './header.scss'
import Banner from '../Banner/Banner.js'
import SiteSponser from '../siteSponser/SiteSponser.js'
import HeaderMenu from '../Header-Menu/HeaderMenu.js'

class Header extends React.Component {
  render () {
    return (
      <div className='main-header'>
        <Banner />
        <img className='jazz-logo-header' src='js/img/jazz-logo.svg' alt='Jazz-logo' />
        <SiteSponser />
        <HeaderMenu />
      </div>
    )
  }
}

export default Header
