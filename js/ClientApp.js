import React from 'react'
import { render } from 'react-dom'

const App = React.createClass({
  render () {
    return (
      <div>
        Hello from the app
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
