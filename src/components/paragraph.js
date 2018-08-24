import styles from './paragraph.styles'
import fadeIn from '../styles/fade-in'

export default ({ children }) => (
  <p className='paragraph fade-in'>
    { children }
    <style jsx>{ styles }</style>
    <style jsx>{ fadeIn }</style>
  </p>
)
