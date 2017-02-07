import React from 'react'
import './executives-club.scss'

import ExecutiveTitle from '../executiveTitle/ExecutiveTitle'
import ExecutivesPhoto from '../executivePhoto/ExecutivesPhoto'
import ExecutivesText from '../executivesText/ExecutivesText'
// import ExecutiveCta from '../executiveCTA/ExecutiveCta'

class ExecutivesClub extends React.Component {
  render () {
    return (
      <div className='executive-club-container clearfix'>
        <ExecutiveTitle />
        <ExecutivesText />
        <ExecutivesPhoto />
        {/* <ExecutiveCta /> */}
      </div>
          )
  }
}

export default ExecutivesClub
