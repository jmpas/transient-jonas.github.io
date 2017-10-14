import styles from '../styles/components/overlay'

export default ({ show }) => (
  <div className={ `overlay ${ show ? 'visible' : '' }` }>
    <style jsx>{ styles }</style>
  </div>
)
