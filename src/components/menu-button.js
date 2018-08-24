import styles from './menu-button.styles'

export default ({ onClick, open, hidden }) => (
  <div className={`menu-button ${hidden ? 'hidden' : ''}`}>
    <input type='checkbox' onChange={onClick} checked={open || false} />
    <div className='menu-bar-1'></div>
    <div className='menu-bar-2'></div>
    <style jsx>{styles}</style>
  </div>
)
