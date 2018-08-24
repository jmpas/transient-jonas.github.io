import styles from './secondary-title.styles'
import fadeIn from '../styles/fade-in'

export default ({ children }) => (
  <h1 className='secondary-title fade-in'>
    {children}
    <style jsx>{styles}</style>
    <style jsx>{fadeIn}</style>
  </h1>
)
