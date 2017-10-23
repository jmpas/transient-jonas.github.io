import styles from '../styles/components/menu-button'

export default ({ onClick, open }) => (
  <div className='menu-button'>
    <input type='checkbox' onChange={ onClick } checked={ open || false } />
    <div className='menu-bar-1'></div>
    <div className='menu-bar-2'></div>
    <style jsx>{ styles }</style>
  </div>
)
