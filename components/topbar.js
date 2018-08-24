import styles from './topbar.styles'

const Topbar = ({ children }) => (
  <header className='topbar'>
    {children}
    <style jsx>{styles}</style>
  </header>
)

export default Topbar
