import React, { Component } from 'react'

import Head from '../components/head'
// import Logo from '../components/logo'
// import Topbar from '../components/topbar'
// import MenuButton from '../components/menu-button'
// import LazyMenu from '../components/lazy-menu'

import global from '../styles/global'
import normalize from '../styles/normalize'

export default class extends Component {
  state = {
    isMenuOpen: false
  }

  constructor(props) {
    super(props)

    // this.startTransitionFromMenu = this.startTransitionFromMenu.bind(this)
    // this.toggleMenu = this.toggleMenu.bind(this)
  }

  // handleContentState(isMenuOpen) {
  //   if (isMenuOpen) {
  //     clearTimeout(this.showContentTimeout)
  //     this.showContentTimeout = null
  //   } else {
  //     this.showContentTimeout = setTimeout(() => {
  //       this.setState({
  //         ...this.state,
  //         hideContent: false
  //       })

  //       this.showContentTimeout = null
  //     }, 1500)
  //   }
  // }

  // toggleMenu() {
  //   const stateChanges = {
  //     isMenuOpen: !this.state.isMenuOpen
  //   }

  //   if (stateChanges.isMenuOpen) stateChanges.hideContent = true
  //   this.handleContentState(stateChanges.isMenuOpen)

  //   this.setState({ ...this.state, ...stateChanges })
  // }

  // startTransitionFromMenu() {
  //   this.setState({ ...this.state, isMenuOpen: false })
  // }

  // componentDidMount() {
  //   if (this.props.isMenuOpen) {
  //     this.setState({
  //       ...this.state,
  //       isMenuOpen: true
  //     })
  //   }
  // }

  render() {
    return (
      <div className='page-container'>
        <Head {...this.props.meta} />
        {/* <Topbar>
          <Logo shape={'logo'} />
          <MenuButton onClick={this.toggleMenu} open={this.state.isMenuOpen} hidden={this.props.menuPageMode} />
        </Topbar> */}
        {/* <div className={`page-content ${this.state.hideContent ? 'hidden' : ''}`}> */}
        <div className='page-content'>
          {this.props.children}
        </div>
        {/* <LazyMenu show={this.state.isMenuOpen} routeTransition={this.startTransitionFromMenu} closeMenu={this.toggleMenu} /> */}
        <style global jsx>{global}</style>
        <style global jsx>{normalize}</style>
      </div>
    )
  }
}

