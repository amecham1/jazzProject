import React from 'react'
import { render } from 'react-dom'
import './scss/reset.scss'

import NbaHeader from './components/NbaHeader/NbaHeader'
import Header from './components/header/Header'
import LandingPhoto from './components/landingPhoto/LandingPhoto'
import SuiteTitle from './components/suiteTitle/SuiteTitle.js'

const App = React.createClass({
  render () {
    return (
      <div>
        <NbaHeader />
        <Header />
        <LandingPhoto />
        <SuiteTitle />
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
