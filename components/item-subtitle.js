import styles from './item-subtitle.styles'

const ItemSubtitle = ({ children }) => (
  <div className='item-subtitle'>
    {children}
    <style jsx>{styles}</style>
  </div>
)

export default ItemSubtitle
