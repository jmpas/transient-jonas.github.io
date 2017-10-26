import Link from './link'

import styles from '../styles/components/photo-item'
import fadeIn from '../styles/fade-in'

export default ({ imgUrl, url, startTransition }) => (
  <div className='photo-item root'>
    <Link  href={ `https://500px.com/${ url }` } middleware={ startTransition }>
      <img src={ imgUrl } />
    </Link>
    <style jsx>{ styles }</style>
    <style jsx>{ fadeIn }</style>
  </div>
)
