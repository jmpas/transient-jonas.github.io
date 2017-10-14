import styles from '../styles/components/menu-button'

export default ({ onClick }) => (
  <div className='menu-button'>
    <input type='checkbox' onChange={ onClick } />
    <div className='menu-bar-1'></div>
    <div className='menu-bar-2'></div>
    <style jsx>{ styles }</style>
  </div>
)
