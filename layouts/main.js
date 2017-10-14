import { Component } from 'react'

import Head from '../components/head'
import Logo from '../components/logo'
import Topbar from '../components/topbar'
import MenuButton from '../components/menu-button'
import MenuNav from '../components/menu-nav'
import Overlay from '../components/overlay'

import global from '../styles/global'
import normalize from '../styles/normalize'

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    }
  }
  toggleMenu() {
    this.setState({
      ...this.state,
      isMenuOpen: !this.state.isMenuOpen
    })
  }
  updateCurrentMenuItem(menuItem) {
    this.setState({
      ...this.state,
      currentMenuItem: menuItem
    })
  }
  render() {
    return (
      <div>
        <Head {...this.props.meta} />
        <Topbar>
          <Logo navMode={ this.state.isMenuOpen } shape={ this.state.currentMenuItem || 'logo' }/>
          <MenuButton onClick={ this.toggleMenu.bind(this) }/>
        </Topbar>
        <div className={ `page-content ${ this.state.isMenuOpen ? 'hidden' : ''}` }>
          { this.props.children }
        </div>
        <MenuNav show={ this.state.isMenuOpen } onChange={ this.updateCurrentMenuItem.bind(this) } />
        <Overlay show={ this.state.isMenuOpen } />
        <style global jsx>{ global }</style>
        <style global jsx>{ normalize }</style>
      </div>
    )
  }
}

