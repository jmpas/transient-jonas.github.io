import styles from '../styles/components/primary-title'
import fadeIn from '../styles/fade-in'

export default ({ children }) => (
  <h1 className='primary-title root'>
    { children }
    <style jsx>{ styles }</style>
    <style jsx>{ fadeIn }</style>
  </h1>
)
