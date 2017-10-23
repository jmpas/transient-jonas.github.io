import styles from '../styles/components/overlay'

export default ({ show, transitioning }) => (
  <div className={ `overlay ${ show ? 'visible' : '' } ${ transitioning ? 'transitioning' : '' }` }>
    <div className='polygon'></div>
    <div className='polygon'></div>
    <div className='polygon'></div>
    <div className='polygon'></div>
    <style jsx>{ styles }</style>
  </div>
)
