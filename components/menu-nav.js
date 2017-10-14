import Link from 'next/link'
import MenuItem from './menu-item'

import styles from '../styles/components/menu-nav'

export default ({ show, onChange }) => (
  <nav className={ `menu-nav ${ show ? 'visible' : '' }` }>
    <ul>
      <Link href='/'>
        <MenuItem onHover={ onChange } slug='blog'>Articles</MenuItem>
      </Link>
      <MenuItem onHover={ onChange } slug='photography'>Photography</MenuItem>
      <MenuItem onHover={ onChange } slug='experiment'>Experiments</MenuItem>
      <MenuItem onHover={ onChange } slug='contact'>Contact</MenuItem>
    </ul>
    <style jsx>{ styles }</style>
  </nav>
)
