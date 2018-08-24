import styles from './item-data.styles'
import fadeIn from '../styles/fade-in'

const ItemData = ({ children }) => (
  <span className='item-data fade-in'>
    {children}
    <style jsx>{styles}</style>
    <style jsx>{fadeIn}</style>
  </span>
)

export default ItemData
