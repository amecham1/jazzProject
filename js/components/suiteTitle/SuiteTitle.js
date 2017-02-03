import React from 'react'
import './suite-title.scss'

class SuiteTitle extends React.Component {
  render () {
    return (
      <div className='suite-title'>
        <p className='suite-name'>LUXURY SUITES</p>
        <div className='down-arrow-box'>
          <img className='down-arrow' src='js/img/Down Arrow.svg' alt='down facing arrowhead' />
        </div>
      </div>
    )
  }
}

export default SuiteTitle
