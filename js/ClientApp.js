import React from 'react'
import { render } from 'react-dom'
import './scss/reset.scss'

import NbaHeader from './components/NbaHeader/NbaHeader'
import Header from './components/header/Header'

const App = React.createClass({
  render () {
    return (
      <div>
        <NbaHeader />
        <Header />
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
