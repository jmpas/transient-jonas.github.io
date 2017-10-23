import React, { Component } from 'react'

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
      isMenuOpen: false,
      transitioning: false
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
  startTransition() {
    this.setState({
      ...this.state,
      transitioning: true
    })
  }
  startTransitionFromMenu() {
    this.setState({
      ...this.state,
      isMenuOpen: false
    })

    setTimeout(() => this.startTransition(), 900)
  }
  render() {
    var children = React.Children.map(this.props.children, child => (
      React.cloneElement(child, { startTransition: this.startTransition.bind(this) })
    ))

    return (
      <div>
        <Head {...this.props.meta} />
        <Topbar>
          <Logo navMode={ this.state.isMenuOpen } shape={ this.state.currentMenuItem || 'logo' } startTransition={ this.startTransition.bind(this) } />
          <MenuButton onClick={ this.toggleMenu.bind(this) } open={ this.state.isMenuOpen } />
        </Topbar>
        <div className={ `page-content ${ this.state.isMenuOpen ? 'hidden' : ''}` }>
          { children }
        </div>
        <MenuNav show={ this.state.isMenuOpen } onChange={ this.updateCurrentMenuItem.bind(this) } startTransition={ this.startTransitionFromMenu.bind(this) } closeMenu={ this.toggleMenu.bind(this) } />
        <Overlay show={ this.state.isMenuOpen } transitioning={ this.state.transitioning } />
        <style global jsx>{ global }</style>
        <style global jsx>{ normalize }</style>
      </div>
    )
  }
}

