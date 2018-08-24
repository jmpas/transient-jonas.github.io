import { Component } from 'react'

import Head from '../components/head'
import MenuNav from '../components/menu-nav'
import MenuSlider from '../components/menu-slider'

import global from '../styles/global'
import normalize from '../styles/normalize'

const metaData = {
  title: 'Nipher',
  description: 'Web Development, amateur photography & code experiments',
  url: 'https://nipher.io'
}

export default class Index extends Component {
  state = { ready: false, firstRender: true, Menu: MenuNav }

  componentDidMount() {
    this.setState({ Menu: window.innerWidth > 780 ? MenuNav : MenuSlider })

    setTimeout(() => this.setState({ ...this.state, ready: true }), 0)
  }

  startTransitionFromMenu = () => {
    this.setState({
      firstRender: false,
      ready: false
    })
  }

  render() {
    const { Menu } = this.state

    return (
      <div className='page-container'>
        <Head { ...metaData } />
        <Menu show={this.state.ready} routeTransition={this.startTransitionFromMenu} />
        <style jsx>{`
          :global(.menu-nav, .menu-slider) {
            transform: ${this.state.firstRender ? 'translateY(0) !important' : ''};
          }
        `}</style>
        <style global jsx>{global}</style>
        <style global jsx>{normalize}</style>
      </div>
    )
  }
}
