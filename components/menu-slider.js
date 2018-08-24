import Swipeable from 'react-swipeable'
import { Component } from 'react'

import MenuItem from './menu-item'
import Logo from './logo'
import Overlay from './overlay'

import styles from './menu-slider.styles'

const items = [
  { slug: 'blog', href: '/blog', modifier: '', label: 'Articles' },
  { slug: 'photography', href: '/photography', modifier: '', label: 'Photography' },
  { slug: 'experiment', href: '/experiments', modifier: '', label: 'Experiments' },
  { slug: 'contact', href: '/about', modifier: '', label: 'Contact' }
]

export default class extends Component {
  state = { logoShape: 'blog', currentItem: items[0] }

  currentIndex() {
    return items.indexOf(this.state.currentItem)
  }

  changeCurrentItem(currentItem) {
    this.setState({ logoShape: currentItem.slug, currentItem })
  }

  onSwipedLeft = () => {
    const currentIndex = this.currentIndex()

    if (currentIndex === items.length - 1) return

    this.changeCurrentItem(items[currentIndex + 1])
  }

  onSwipedRight = () => {
    const currentIndex = this.currentIndex()

    if (currentIndex === 0) return

    this.changeCurrentItem(items[currentIndex - 1])
  }

  render() {
    const { show, routeTransition, closeMenu } = this.props

    return (
      <nav className={`menu-slider ${show ? 'visible' : ''}`}>
        <Swipeable preventDefaultTouchmoveEvent={true}
          onSwipedLeft={this.onSwipedLeft}
          onSwipedRight={this.onSwipedRight}
          className='swipeable-container'
          delta={50}>
          <Overlay show={show} />
          <Logo shape={this.state.logoShape} />
          <ul>
            {
              items.map(({ slug, href, modifier, label }, idx) => {
                let modifiers = modifier
                if (idx > this.currentIndex()) {
                  modifiers = `${modifier} next`
                } else if (idx < this.currentIndex()) {
                  modifiers = `${modifier} prev`
                }

                let routeProps = {}
                if (href) {
                  routeProps = {
                    middleware: routeTransition,
                    sameRouteFallback: closeMenu
                  }
                }

                return (
                  <MenuItem
                    key={idx}
                    { ...{ slug, href, modifier: modifiers } }
                    { ...routeProps }
                  >
                    {label}
                  </MenuItem>
                )
              })
            }
          </ul>
        </Swipeable>
        <style jsx>{styles}</style>
      </nav>
    )
  }
}
