import styles from '../styles/components/item-data'

export default ({ children }) => (
  <span className='root'>
    { children }
    <style jsx>{ styles }</style>
  </span>
)
