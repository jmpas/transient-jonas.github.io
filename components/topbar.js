import styles from '../styles/components/topbar'

export default ({ children }) => (
  <header className='root'>
    <style jsx>{ styles }</style>
    { children }
  </header>
)
