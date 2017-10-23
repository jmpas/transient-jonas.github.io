import Link from './link'

import styles from '../styles/components/menu-item'

export default ({ onHover, children, slug, href, middleware, sameRouteFallback }) => {
  return <li className='menu-item' onMouseEnter={ (() => onHover(slug) ) }>
    <Link { ...{ href, sameRouteFallback } } middleware={ middleware } delay={ 1900 }>
      <h2 className='title'>
        { children }
        <div className='line'></div>
      </h2>
    </Link>
    <style jsx>{ styles }</style>
    <style global jsx>{`
      .menu-item a {
        display: block;
        height: 100%;
      }
    `}</style>
  </li>
}
