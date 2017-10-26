import styles from '../styles/components/profile-picture'
import fadeIn from '../styles/fade-in'

export default () => (
  <div className='profile-picture root'>
    <img src='/static/profile.png' />
    <style jsx>{ styles }</style>
    <style jsx>{ fadeIn }</style>
  </div>
)
