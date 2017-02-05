import React from 'react'
import './lexus-text.scss'

import LexusIcon from '../lexusIcon/LexusIcon'

class LexusText extends React.Component {
  render () {
    return (
      <div className='lexus-text-container'>
        <h3 className='title-suite-text'>ENJOY THE GAME IN STYLE.</h3>
        <p className='suite-paragraph first-suite-paragraph'>One of the most prestigious clubs offered, the Lexus Courtside Club provides the ultimate in luxury and sophistication. Located in the front four rows of center court, enjoy the excitement of Jazz basketball from the comfort of oversized leather seats equipped with TV monitors, as well as elite service and amenities, including, pre-game meals and half-time snacks served in the privacy of the Lexus Club dining room.</p>
        <h3 className='title-suite-text'>INTERESTED IN RENTING A SUITE FOR A GAME?</h3>
        <p className='suite-paragraph cta-paragraph'>For more information, please call <span className='cta-name'>Chris Barney</span> (Vice President of Premium Seating & VIP Services) at <span className='cta-phone-number'>801-325-2323</span>.</p>
        <LexusIcon />
      </div>
        )
  }
        }

export default LexusText
