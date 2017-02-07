import React from 'react'
import './suite-text.scss'

class SuiteText extends React.Component {
  render () {
    return (
      <div className='suite-text-container'>
        <h3 className='title-suite-text'>THE BEST WAY TO ENJOY ALL OF THE EXCITMENT.</h3>
        <p className='suite-paragraph first-suite-paragraph'>Welcome to the very best Utah Sports and Entertainment has to offer - Vivint Smart Home Arena Luxury Suites. Whether, you are entertaining business clients, closing a major deal or socializing with family and friends, a Luxury Suite provides all the convenience, comfort and service you desire. Home to the Utah Jazz and the most popular musical acts and family shows - Vivint Smart Home Arena is the place to meet, greet, see and be seen in Utah.</p>
        <h3 className='title-suite-text'>WHY BE A LUXURY SUITE HOLDER?</h3>
        <p className='suite-paragraph'>Your suite can enhance your corporate profile and give you an advantage over your competitors. It offers the chance to communicate your message in a luxurious setting while making entertaining as easy as it is elegant. Be a part of the most unique and exciting way to entertain in Utah by becoming an Vivint Smart Arena Luxury Suite holder.</p>
        <h3 className='title-suite-text'>INTERESTED IN RENTING A SUITE FOR A GAME?</h3>
        <p className='suite-paragraph cta-paragraph'>For more information, please call <span className='cta-name'>Chris Barney</span> (Vice President of Premium Seating & VIP Services) at <span className='cta-phone-number'>801-325-2323</span>.</p>
      </div>
    )
  }
}

export default SuiteText
