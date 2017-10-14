import styles from '../styles/components/topbar'

export default ({ children }) => (
  <header className='topbar'>
    { children }
    <style jsx>{ styles }</style>
  </header>
)
