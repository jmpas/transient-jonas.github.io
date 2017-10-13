import styles from '../styles/components/item-subtitle'

export default ({ children }) => (
  <div className='root'>
    { children }
    <style jsx>{ styles }</style>
  </div>
)
