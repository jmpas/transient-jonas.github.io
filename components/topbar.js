import { medium, big } from '../styles/layout-spacing'

export default ({ children }) => (
  <header className='root'>
    <style jsx>{`
        .root {
          padding: ${ medium }px ${ big }px
          display: flex;
        }
      `}</style>
    { children }
  </header>
)
