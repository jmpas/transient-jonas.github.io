import styles from './item-title.styles'

const ItemTitle = ({ children }) => (
  <h3 className='item-title' itemProp="headline">
    {children}
    <style jsx>{styles}</style>
  </h3>
)

export default ItemTitle
