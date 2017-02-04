import React from 'react'
import './suiteContent.scss'

class SuiteContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      view: true
    }
  }
  viewContent () {
    if (!this.props.containerStatus) {
      this.state.view = false
      console.log(this.state.view)
      return 'close-content'
    } else {
      this.state.view = true
      console.log(this.state.view)
      return 'open-content'
    }
  }
  render () {
    let showContainer = this.viewContent()
    return (
      <div className={showContainer}>
        <p>is hkjhkjhjk working</p>
      </div>
    )
  }
}
SuiteContent.propTypes = {
  containerStatus: React.PropTypes.bool
}

export default SuiteContent
