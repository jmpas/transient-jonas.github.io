import { Component } from 'react'
import dynamic from 'next/dynamic'
import sizeMe from 'react-sizeme'

const MenuNav = dynamic(import('./menu-nav'))
const MenuSlider = dynamic(import('./menu-slider'))

export default sizeMe()(class extends Component {
  state = { menu: null }

  componentWillMount() {
    const Menu = this.props.size.width > 780 ? MenuNav : MenuSlider

    this.setState({ Menu })
  }

  render() {
    const { Menu } = this.state

    if (Menu) {
      return <Menu { ...this.props } />
    } else {
      return null
    }
  }
})
