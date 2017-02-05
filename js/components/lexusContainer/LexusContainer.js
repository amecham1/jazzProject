import React from 'react'
import './lexus-container.scss'

import LexusTitle from '../lexusTitle/LexusTitle'
import LexusPhoto from '../lexusPhoto/LexusPhoto'

class LexusContainer extends React.Component {
  render () {
    return (
      <div>
        <LexusTitle />
        <LexusPhoto />
      </div>
    )
  }
}

export default LexusContainer
