import { Component } from 'react'

import MenuItem from './menu-item'
import Logo from './logo'
import Overlay from './overlay'

import styles from './menu-nav.styles'

export default class extends Component {
  state = { logoShape: 'logo' }

  changeLogo = slug => this.setState({ logoShape: slug })

  render() {
    const { show, routeTransition, closeMenu } = this.props

    return (
      <nav className={`menu-nav ${show ? 'visible' : ''}`}>
        <Overlay show={show} />
        <Logo shape={this.state.logoShape} />
        <ul>
          <MenuItem onHover={this.changeLogo} slug='blog' modifier='with-hover' href='/blog' middleware={routeTransition} sameRouteFallback={closeMenu}>Articles</MenuItem>
          <MenuItem onHover={this.changeLogo} slug='photography' modifier='with-hover' href='/photography' middleware={routeTransition} sameRouteFallback={closeMenu}>Photography</MenuItem>
          <MenuItem onHover={this.changeLogo} slug='experiment' modifier='with-hover' href='/experiments' middleware={routeTransition} sameRouteFallback={closeMenu}>Experiments</MenuItem>
          <MenuItem onHover={this.changeLogo} slug='contact' modifier='with-hover' href='/about' middleware={routeTransition} sameRouteFallback={closeMenu}>Contact</MenuItem>
        </ul>
        <style jsx>{styles}</style>
        <style global jsx>{`
          .menu-nav .menu-item {
            transform: translateX(-5%);
            opacity: 0;

            transition: transform 1s ease, opacity .3s ease;
          }

          .menu-nav.visible .menu-item {
            transform: translateX(0);
            opacity: 1;

            transition: transform 1s 1.1s ease, opacity .3s 1.1s ease;
          }
        `}</style>
      </nav>
    )
  }
}
