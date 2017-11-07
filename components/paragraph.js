import styles from '../styles/components/paragraph'
import fadeIn from '../styles/fade-in'

export default ({ children }) => (
  <p className='paragraph root'>
    { children }
    <style jsx>{ styles }</style>
    <style jsx>{ fadeIn }</style>
  </p>
)
