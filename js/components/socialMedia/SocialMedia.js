import React from 'react'
import './social-media.scss'

class SocialMedia extends React.Component {
  render () {
    return (
      <div className='social-box social-header'>
        <a className='social-icon' href='https://www.facebook.com/utahjazz/'><img src='js/img/facebook-square.svg' alt='facebook-square-icon' /></a>
        <a className='social-icon' href='https://twitter.com/utahjazz?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'><img src='js/img/twitter-square.svg' alt='twitter-bird-square-icon' /></a>
        <a className='social-icon' href='https://www.instagram.com/utahjazz/?hl=en'><img src='js/img/instagram-square.svg' alt='instagram-square-icon' /></a>
      </div>
    )
  }
}

export default SocialMedia
