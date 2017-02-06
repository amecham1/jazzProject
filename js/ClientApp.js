import React from 'react'
import { render } from 'react-dom'
import './scss/reset.scss'

import NbaHeader from './components/NbaHeader/NbaHeader'
import Header from './components/header/Header'
import LandingPhoto from './components/landingPhoto/LandingPhoto'
import SuiteContainer from './components/suiteContainer/SuiteContainer'
import LexusContainer from './components/lexusContainer/LexusContainer'
import ExecutivesClub from './components/executivesClub/ExecutivesClub'

class App extends React.Component {
  render () {
    return (
      <div>
        <NbaHeader />
        <Header />
        <LandingPhoto />
        <SuiteContainer />
        <LexusContainer />
        <ExecutivesClub />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
