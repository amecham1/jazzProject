import React from 'react'
import { render } from 'react-dom'
import './scss/reset.scss'

import NbaHeader from './components/NbaHeader/NbaHeader'
import Header from './components/header/Header'
import LandingPhoto from './components/landingPhoto/LandingPhoto'
import SuiteContainer from './components/suiteContainer/SuiteContainer'
// import SuiteTitle from './components/suiteTitle/SuiteTitle.js'
// import LexusClub from './components/lexusClub/LexusClub.js'
// import ExecutivesClub from './components/executiveClub/ExecutivesClub.js'

class App extends React.Component {
  render () {
    return (
      <div>
        <NbaHeader />
        <Header />
        <LandingPhoto />
        <SuiteContainer />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
