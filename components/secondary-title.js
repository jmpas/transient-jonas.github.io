import styles from '../styles/components/secondary-title'
import fadeIn from '../styles/fade-in'

export default ({ children }) => (
  <h1 className='root'>
    { children }
    <style jsx>{ styles }</style>
    <style jsx>{ fadeIn }</style>
  </h1>
)
