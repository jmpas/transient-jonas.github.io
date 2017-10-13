import styles from '../styles/components/secondary-title'

export default ({ children }) => (
  <h1 className='root'>
    { children }
    <style jsx>{ styles }</style>
  </h1>
)
