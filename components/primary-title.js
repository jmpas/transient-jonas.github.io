import styles from '../styles/components/primary-title'

export default ({ children }) => (
  <h1 className='primary-title'>
    { children }
    <style jsx>{ styles }</style>
  </h1>
)
