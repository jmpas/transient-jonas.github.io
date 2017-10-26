import styles from '../styles/components/item-data'
import fadeIn from '../styles/fade-in'

export default ({ children }) => (
  <span className='item-data root'>
    { children }
    <style jsx>{ styles }</style>
    <style jsx>{ fadeIn }</style>
  </span>
)
