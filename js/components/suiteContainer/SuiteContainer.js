import React from 'react'
import './suite-container.scss'

import SuiteTitle from '../suiteTitle/SuiteTitle'
import SuitePhotoContainer from '../suitePhoto/SuitePhotoContainer'
import SuiteText from '../suiteText/SuiteText'
class SuiteContainer extends React.Component {
  render () {
    return (
      <div className='suite-container clearfix'>
        <SuiteTitle />
        <SuitePhotoContainer />
        <SuiteText />
      </div>
    )
  }
}

export default SuiteContainer
