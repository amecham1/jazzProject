import React from 'react'
import './lexus-container.scss'

import LexusTitle from '../lexusTitle/LexusTitle'
import LexusPhoto from '../lexusPhoto/LexusPhoto'
import LexusText from '../lexusText/LexusText'

class LexusContainer extends React.Component {
  render () {
    return (
      <div className='lexus-container clearfix'>
        <LexusTitle />
        <LexusText />
        <LexusPhoto />
      </div>
    )
  }
}

export default LexusContainer
