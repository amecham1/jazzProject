import React from 'react'
import './nbaHeader.scss'

class NbaHeader extends React.Component {
  render () {
    return (
      <div className='nba-header'>
        <img className='nba-logo' src='js/img/nba-com-logo.png' alt='NBA.Com logo' />
        <ul className='nba-menu'>
          <li className='nba-menu-item'>GLOBAL</li>
          <li className='nba-menu-item'>TEAMS</li>
          <li className='nba-menu-item'>D-LEAGUE</li>
          <li className='nba-menu-item'>WNBA</li>
          <li className='nba-menu-item'>NBA STORE</li>
        </ul>
      </div>
    )
  }
}

export default NbaHeader
