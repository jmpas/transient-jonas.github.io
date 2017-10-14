import styles from '../styles/components/menu-item'

export default ({ onHover, children, slug }) => (
  <li className='menu-item' onMouseEnter={ (() => onHover(slug) ) }>
    <h2 className='title'>
      { children }
      <div className='line'></div>
    </h2>
    <style jsx>{ styles }</style>
  </li>
)
