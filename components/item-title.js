import styles from '../styles/components/item-title'

export default ({ children }) => (
  <h3 className='root'>
    { children }
    <style jsx>{ styles }</style>
  </h3>
)
