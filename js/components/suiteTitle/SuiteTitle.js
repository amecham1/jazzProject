import React from 'react'
import SuiteContent from '../suiteContent/SuiteContent.js'
import './suite-title.scss'

class SuiteTitle extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // state for setting the height of suite div
      open: false
    }
    this.toggleContent = this.toggleContent.bind(this)
  }
  // allows the user to open and close the suite div
  toggleContent () {
    this.setState({
      open: !(this.state.open)
    })
  }
  // sets the height when opened and closed
  getContentToggleHeight () {
    if (this.state.open) {
      return 'suite-open'
    } else {
      return 'suite-closed'
    }
  }
  // sets the backgroung color when opened and closed
  changeBackgroundColor () {
    if (this.state.open) {
      return '#FFFFFF'
    } else {
      return '#F89F1F'
    }
  }
  // hide the content until opened
  revealContent () {
    if (this.state.open) {
      return this.state.open
    } else {
      return this.state.open
    }
  }
  render () {
    // let contentStyle = { height: this.getContentToggleHeight(),
    // backgroundColor: this.changeBackgroundColor() }
    let contentStyle = this.getContentToggleHeight()
    return (
      <div>
        <div className='suite-title suite-title-begin'>
          <div className='suite-clickable-area' onClick={this.toggleContent} >
            <p className='suite-name'>LUXURY SUITES</p>
            <div className='down-arrow-box'>
              <img className='down-arrow' src='js/img/Down Arrow.svg' alt='down facing arrowhead' />
            </div>
          </div>
          <div className={contentStyle}>
            <SuiteContent containerStatus={this.state.open} />
          </div>
        </div>
      </div>
    )
  }
}

export default SuiteTitle
