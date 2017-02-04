import React from 'react'
import './suite-title.scss'

class SuiteTitle extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
    this.toggleContent = this.toggleContent.bind(this)
  }
  toggleContent () {
    this.setState({
      open: !(this.state.open)
    })
  }
  getContentToggleHeight () {
    if (this.state.open) {
      return '80vh'
    } else {
      return '10vh'
    }
  }
  changeBackgroundColor () {
    if (this.state.open) {
      return '#FFFFFF'
    } else {
      return '#F89F1F'
    }
  }
  render () {
    var contentStyle = { height: this.getContentToggleHeight(),
    'background-color': this.changeBackgroundColor() }
    return (
      <div style={contentStyle} className='suite-title suite-title-begin' onClick={this.toggleContent}>
        <p className='suite-name'>LUXURY SUITES</p>
        <div className='down-arrow-box'>
          <img className='down-arrow' src='js/img/Down Arrow.svg' alt='down facing arrowhead' />
        </div>
      </div>
    )
  }
}

export default SuiteTitle
