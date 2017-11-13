import styles from '../styles/components/item-title'

export default ({ children }) => (
  <h3 className='root' itemProp="headline">
    { children }
    <style jsx>{ styles }</style>
  </h3>
)
