import styles from '../styles/components/post-tag'

export default ({ children }) => (
  <span className='root'>
    { children }
    <style jsx>{ styles }</style>
  </span>
)
