import styles from '../styles/components/overlay'

export default ({ show }) => (
  <div className={ `overlay ${ show ? 'visible' : '' }` }>
    <div className='polygon'></div>
    <div className='polygon'></div>
    <div className='polygon'></div>
    <div className='polygon'></div>
    <style jsx>{ styles }</style>
  </div>
)
