import React from 'react'
import './ham-menu.scss'

class HamMenu extends React.Component {
  render () {
    return (
      <div className='ham-menu-container'>
        <img onClick={this.props.onClick} src='js/img/HAM-Menu.svg' alt='three horizontal line icon' />
      </div>
    )
  }
}
HamMenu.propTypes = {
  onClick: React.PropTypes.func
}

export default HamMenu
