import MenuItem from './menu-item'

import styles from '../styles/components/menu-nav'
import menuItemsAnimation from '../styles/components/menu-items-animation';

export default ({ show, onChange, startTransition, closeMenu }) => (
  <nav className={ `menu-nav ${ show ? 'visible' : '' }` }>
    <ul>
      <MenuItem onHover={ onChange } slug='blog' href='/' middleware={ startTransition } sameRouteFallback={ closeMenu }>Articles</MenuItem>
      <MenuItem onHover={ onChange } slug='photography'>Photography</MenuItem>
      <MenuItem onHover={ onChange } slug='experiment'>Experiments</MenuItem>
      <MenuItem onHover={ onChange } slug='contact'>Contact</MenuItem>
    </ul>
    <style jsx>{ styles }</style>
    <style global jsx>{ menuItemsAnimation }</style>
  </nav>
)
